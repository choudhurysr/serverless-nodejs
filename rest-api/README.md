# Overview
* A Serverless Nodejs Project 
* Create a set of Lambdas to perform CRUD operations on DynamoDB.
* Deploy as Rest API on AWS API Gateway


# Get Code and Deploy
* `git clone https://github.com/choudhurysr/serverless-nodejs.git`

* `cd rest-api`

* Run `serverless deploy`

* Note endpoints from output.Replace *** with correct value from output.
  Add Product:
  `POST - https://***.execute-api.us-east-1.amazonaws.com/dev/products`

  List Products:
  `GET - https://***.execute-api.us-east-1.amazonaws.com/dev/products`

  Get a Product:
  `GET - https://***.execute-api.us-east-1.amazonaws.com/dev/products/{id}`

  Update a Product:
  `PUT - https://lcsb3ygau4.execute-api.us-east-1.amazonaws.com/dev/products/{id}`
    
  Delete a Product:
  `DELETE - https://lcsb3ygau4.execute-api.us-east-1.amazonaws.com/dev/products/{id}`


# Run and Test
* Run API from Postman `https://***.execute-api.us-east-1.amazonaws.com/dev/hello`
* Check AWS CloudWatch Logs
* Make changes to handler function
* Redeploy specific function: `serverless deploy --function <function-name>`
* Check AWS CloudWatch Logs
