echo "Initiating Build Script"

# Generate Random Number of Builds
min=0
max=100
rand_num=`shuf -i $min-$max -n 1`

awsRegion="us-east-1"
accountId="335783331232"

CloudFormationStackName="AWS_Serverless_stack-"$rand_num
DynamoStackName="dyanmoStackName"

s3BuildBucketName="alanbuildbucket"
s3UploadBucket="dynamoStackName-s3UploadBucket"

echo "Initiating Build Bucket"

if aws s3api get-bucket-location \
	--bucket $s3BuildBucketName \
	--region $awsRegion \
	2>&1 | grep -q 'NoSuchBucket' ; then

	# S3api could not find bucket; Create new bucket
	echo "Making New Bucket"
	aws s3 mb s3://$s3BuildBucketName --region $awsRegion
else
	
	echo "$s3BuildBucketName already exists, uploading build scripts"
fi
