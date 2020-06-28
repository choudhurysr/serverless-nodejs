# Serverless NodeJs Email Sender

An AWS NodeJs Lambda that sends SES email

Runs using the serverless `schedule` event. 
More documentation [here](https://serverless.com/framework/docs/providers/aws/events/schedule/).
`schedule` event with either `rate` or `cron`.

## Setup and Verify SES Email
```
Add and verfiy test email address used in Lambda handler in aws
https://console.aws.amazon.com/ses/home?region=us-east-1#verified-senders-email:
```

## Install serverless
```
npm install serverless -g
serverless -v
```

## Deploy
```
replace test@test.com in handler.js with email setup in SES
then run below to deploy
```
```
serverless deploy -v 
```

## Invoke function
```
serverless invoke --function dailyEmail --log
```

## Deploy specific function
```
serverless deploy --function dailyEmail 
```
