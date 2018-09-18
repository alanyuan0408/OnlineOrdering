import json
import sys

# argv1 = name of input json file, argv2, output key
with open(sys.argv[1], "r") as jsonReadFile:
	jsonFile = ""
	for line in jsonReadFile:
		jsonFile += line
	stackOutputsysJSON = json.loads(jsonFile)

# Input is the Stack Output from describe-stacks
stackOutputs = stackOutputsysJSON.get("Stacks")[0].get("Outputs")

for output in stackOutputs:
	if output.get("OutputKey") == sys.argv[2]:
		print(output.get("OutputValue"))