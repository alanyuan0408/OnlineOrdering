'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app = express()

// Import AWS Stuff
const AWS = require('aws-sdk')
const uuid = require('uuid')

app.set('view engine', 'pug')
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(awsServerlessExpressMiddleware.eventContext())

app.post('/customers', (req, res) => {
	var documentClient = new AWS.DynamoDB.DocumentClient(); 

	var params = {
		Item : {
			"CustomerID" : uuid.v1(),
			"Name" : "Alan Customer"
		},
		TableName : process.env.TABLE_NAME
	};

	documentClient.put(params, function(err, data){
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send("added Customer Order");
		}
		
	});
})
// The aws-serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)

// Export your express server so you can import it in the lambda function.
module.exports = app
