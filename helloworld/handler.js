'use strict';

module.exports.hello = (event, context, callback) => {
  const message = {
    message: "Hello there! Go Serverless! Your NodeJs function ran successfully!"
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify(message),
  };
  callback(null, response);
};