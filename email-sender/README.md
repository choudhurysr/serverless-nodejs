# serverless email-sender

An AWS NodeJs Lambda that sends SES email

Runs using the serverless `schedule` event. 
More documentation [here](https://serverless.com/framework/docs/providers/aws/events/schedule/).
`schedule` event with either `rate` or `cron`.

## Rate
```
rate(value unit)
```
**Example** `rate(3 days)`


## Cron syntax
```pseudo
cron(Minutes Hours Day-of-month Month Day-of-week Year)
```

## Setup and Verify SES Email
```
Add and verfiy test email address in aws
https://console.aws.amazon.com/ses/home?region=us-east-1#verified-senders-email:
```

## Deploy
```bash
serverless deploy -v 
```

## Invoke function
serverless invoke --function dailyEmail --log

## Deploy specific function
serverless deploy --function dailyEmail 
