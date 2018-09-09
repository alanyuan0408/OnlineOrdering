echo "1) Build Script"

# Generate Random Number of Builds
min=0
max=100
rand_num=`shuf -i $min-$max -n 1`

awsRegion="us-east-1"
accountId="335783331232"

CloudFormationStackName="AWS_Serverless_stack-"$rand_num

#DynamoStack Should be persistent
DynamoStackName="dyanmoStackName"

s3BuildBucketName="alanbuildbucket"
s3UploadBucket="dynamoStackName-s3UploadBucket"

echo "2) Build Upload Bucket"

if aws s3api get-bucket-location \
	--bucket $s3BuildBucketName \
	--region $awsRegion \
	2>&1 | grep -q 'NoSuchBucket' ; then

	# S3api could not find bucket; Create new bucket
	echo " - Making New Bucket"
	aws s3 mb s3://$s3BuildBucketName --region $awsRegion
else

	echo " - $s3BuildBucketName already exists, uploading build scripts"
fi

echo "3) Package CloudFormation Files"

# Upload CloudFormation Package to the Build Bucket
aws cloudformation package \
	--s3-bucket $s3BuildBucketName \
	--region $awsRegion \
	--output-template-file packaged-sam.yaml \
	--template-file ./cloudformation.yaml

echo "4) Deploy Data Stack "

aws cloudformation deploy \
	--template-file ./dynamotables.yaml \
	--stack-name $DynamoStackName \
	--capabilities CAPABILITY_IAM \
	--region $awsRegion \

echo "5) Deploy Application Stack"

aws cloudformation deploy
	--template-file packaged-sam.yaml \
	--stack-name $CloudFormationStackName \
	--capabilities CAPABILITY_IAM \
	--region $awsRegion \
	--parameter-overrides DynamoStack=$DynamoStackName

echo "Build Script Complete"