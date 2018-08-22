#! /bin/bash

 echo "Copying dependencies skipped because context is docker build."

 aws cloudformation deploy --template-file packaged-sam.yaml --stack-name "$1" --capabilities CAPABILITY_IAM --region "us-east-2" --parameter-overrides DynamoStack="$2"

exit