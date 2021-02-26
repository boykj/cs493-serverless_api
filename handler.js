'use strict';
const express = require('serverless-express/express');
const handler = require("serverless-express/handler")
const AWS = require("aws-sdk")
const REGION = 'US-WEST-2'
const s3 = new AWS.S3({apiVersions: '2006-03-01'});

const bucket_parameters = {
  Bucket: 'cs493-boyk-test',
}

var app = express();

app.get('/test', function(req, res) {
  s3.listObjects(bucket_parameters, function(err, data) {
    if (err) {
      res.send(err)
    }
    data.Contents.forEach((file) => {
      console.log(file.key)
    })
    res.send({
      data: data
    })
    return data
  })
})



module.exports.api = handler(app);

/*
module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully - file changes!',
        input: event,
        context: context,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
*/