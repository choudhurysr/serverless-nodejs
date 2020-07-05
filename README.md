# Overview
A Serverless Nodejs Project that contains a set of Lamdas for building:
* Rest API using AWS API Gateway
* Perform CRUD operations using Use DynamoDB
* Send Email using AWS SES

# What is Serverless?
* A method of providing backend services on an as-used basis
* Write and deploy code without worrying about the underlying infrastructure
* Physical servers are used but developers do not need to be aware of them
* Charges are based on usage
* Do not have to reserve and pay for a fixed amount of bandwidth or number of servers
* Services auto-scale based on load


# Prerequisites
* Ensure Node is installed and check version using: `node -v`
* Check npm version: `npm -v`
* Install serverless using: `npm install serverless -g` Check version: `serverless -v`
* Setup AWS Account
* Setup AWS IAM User with Admin privileges
* Install awscli and check version: `aws --version`
* Run `aws configure` to update AWS IAM User access_key, secret_key, region
* Check using: `aws configure list`
* Update AWS access_key, secret_key in OS PATH variables


# Serverless Framework - https://www.serverless.com/
The Serverless Framework gives you everything you need to develop, deploy, monitor and secure serverless applications on any cloud.
