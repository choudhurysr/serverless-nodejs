'use strict';

module.exports.hello = (event, context, callback) => {
  //event - data passed by invoker as json
  //context - contains information about the invocation, function, and execution environment
  //callback - send a response to invoker
  const message = {
    message: "Hello there! Go Serverless! Your NodeJs function ran successfully!"
  }
  console.log(JSON.stringify(message));

  const response = {
    statusCode: 200,
    body: JSON.stringify(message),
  };
  callback(null, response);
};