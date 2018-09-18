echo "1) Build Script"

# Generate Random Number of Builds
min=0
max=10000
rand_num=`shuf -i $min-$max -n 1`

awsRegion="us-east-1"
accountId="335783331232"
	
CloudFormationStackName="AWS-Serverless-stack-"$rand_num

#DynamoStack Should be persistent
DynamoStackName="dynamoStackName"

s3BuildBucketName="s3buildbucket"
s3UploadBucket="dynamostackname-s3uploadbucket"

echo "2) Build Upload Bucket"

if aws s3api get-bucket-location \
	--bucket $s3BuildBucketName \
	--region $awsRegion \
	2>&1 | grep -q 'NoSuchBucket' ; then

	# S3api could not find bucket; Create new bucket
	echo " - Making New Bucket"
	aws s3 mb s3://$s3BuildBucketName --region $awsRegion
else

	echo " - $s3BuildBucketName already exists, skip building bucket"
fi

# Create S3 Upload Bucket
if aws s3api get-bucket-location \
	--bucket $s3UploadBucket \
	--region $awsRegion \
	2>&1 | grep -q 'NoSuchBucket' ; then

	# S3api could not find bucket; Create new bucket
	echo " - Making New Bucket"
	aws s3 mb s3://$s3UploadBucket --region $awsRegion
else

	echo " - $s3UploadBucket already exists, skip building bucket"
fi

echo "3) Package CloudFormation Files"

# Upload CloudFormation Package to the Build Bucket
aws cloudformation package \
	--s3-bucket $s3BuildBucketName \
	--region $awsRegion \
	--output-template-file packaged-sam.yaml \
	--template-file ./cloudformation.yaml

echo "4) Deploy Data Stack "

if aws cloudforamtion get-stack-policy \
	--stack-name $DynamoStackName \
	--region $awsRegion \
	2>&1 | grep -q 'error' ; then

	# Dynamo Tables Stack already exists
	echo " - Making New Dynamo Stack"
	aws cloudformation deploy \
		--template-file ./dynamotables.yaml \
		--stack-name $DynamoStackName \
		--capabilities CAPABILITY_IAM \
		--region $awsRegion
else 

	echo " - $DynamoStackName already exists, uploading build scripts"
fi 

TempFileName="temp.json"

# Grab Name of Web Upload Bucket
aws cloudformation describe-stacks \
	--stack-name $DynamoStackName \
	> $TempFileName

webUploadBucketName=$(python.exe ./scripts/pythonscript.py $TempFileName S3BucketName)

echo "5) Deploy Application Stack"

# Supports Mutiple CloudFormation Stacks
aws cloudformation deploy \
	--template-file packaged-sam.yaml \
	--stack-name $CloudFormationStackName \
	--capabilities CAPABILITY_IAM \
	--region $awsRegion \
	--parameter-overrides DynamoStack=$DynamoStackName

echo "6) Deploy Web-build and Web-Deploys"

echo "WebUploadBucket: "$webUploadBucketName

cd ..

ApiGateway="ApiGateway.json"

# Grab Name of Web Upload Bucket
aws cloudformation describe-stacks \
	--stack-name $CloudFormationStackName \
	> $ApiGateway



awsBaseUrl=$(python.exe ./aws/scripts/pythonscript.py $ApiGateway ApiUrl)

echo "REACT_APP_AWS_BASE_URL=$awsBaseUrl" > ".env"

npm run build

aws s3 cp build s3://$webUploadBucketName \
	--recursive \
	--acl public-read-write

cd ./aws

echo "Build Script Complete"

echo "Website can be accessed via: 

http://"$webUploadBucketName".s3-website-"$awsRegion".amazonaws.com"
