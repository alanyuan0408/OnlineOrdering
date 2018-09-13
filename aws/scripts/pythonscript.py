import json
import sys

# Input is the Stack Output from describe-stacks
with open(sys.argv[1], "r") as jsonReadFile:
	jsonFile = ""
	for line in jsonReadFile:
		jsonFile += line
	stackOutputsysJSON = json.loads(jsonFile)

stackOutputs = stackOutputsysJSON.get("Stacks")[0].get("Outputs")

for output in stackOutputs:
	if output.get("OutputKey") == "S3BucketName":
		print(output.get("OutputValue"))