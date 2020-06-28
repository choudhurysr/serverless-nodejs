'use strict';

module.exports.sendDailyEmail = (event, context, callback) => {
    
    var AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    var ses = new AWS.SES();
    var fs = require('fs');

    var emailHtml = fs.readFileSync('./dailyEmail.html', 'utf-8');

    var toAndFromAdress = 'test@test.com'
    var params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8", 
                    Data: emailHtml
                }, 
                Text: {
                    Charset: "UTF-8", 
                    Data: "Your NodeJs Lambda is working!"
                }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: "Test Email"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress, 
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack); 
        // successful response
        else callback(null, data);
    }); 
};

module.exports.sendSundayEmail = (event, context, callback) => {
    
    var AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    var ses = new AWS.SES();
    var fs = require('fs');

    var emailHtml = fs.readFileSync('./sundayEmail.html', 'utf-8');

    var toAndFromAdress = 'test@test.com'
    var params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8", 
                    Data: emailHtml
                }, 
                Text: {
                    Charset: "UTF-8", 
                    Data: "Your NodeJs Lambda is working on Sunday!"
                }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: "Sunday Test Email"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress, 
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack); 
        // successful response
        else callback(null, data);
    }); 
};