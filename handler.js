'use strict';
const express = require('serverless-express/express')
var app = express();

app.get("/test", function(req, res) {
  res.send({
    title: 'track title',
    artist: 'artist name',
    genre: 'genre title'
  });
});

//module.exports = app;

const handler = require("serverless-express/handler")

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