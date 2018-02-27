/*
https://www.npmjs.com/package/gmail-send
https://nodemailer.com/about/
*/
// To run the example add credentials.json (see below), then run:
// node demo.js
//

'use strict';

// file credentials.json looks like following:
//
// {
//   "user": "user@gmail.com",
//   "pass": "abcdefghijklmnop"
// }
//
// You may use credentials.json.example to add you own user/pass and rename to credentials.json
//
var credentials = require('./erniecho.json');
var filepath = ['./Resumes/resume1.docx', './Resumes/resume2.docx'];  // File to attach
var EmailAddress = ['./contactEmailAddress.txt', './recuiterEmail.txt', './craiglistJobs.txt'];

// Example 1
// =========
console.log('Initiate gmail object with credentials');

// Require'ing module and setting default options

//var send = require('gmail-send')({
var send = require('gmail-send')({
  // user: 'user@gmail.com',
  user: credentials.user,                  // Your GMail account used to send emails
  // pass: 'abcdefghijklmnop',
  pass: credentials.pass,                  // Application-specific password
  // to:   'user@gmail.com',
});
//setTimeout(send, 150000, 'Slow');
//setInterval(send, 300000);

var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream(EmailAddress[2]),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
  console.log('Mass Mailer Sending Email to: '+line);
  send({ // Overriding default parameters
    user: credentials.user,           // Your GMail account used to send emails
    pass: credentials.pass,           // Application-specific password
    to:   line,           // Send to person variable
    subject: 'Looking for postion in iOS Development attached with resume',         // Override value set as default
    files: [ filepath[0] ],
    text:    'added your\
    text here\
    type your message\
    \r\n'// Plain text
  }, function (err, res) {
    console.log('E-mailed to:', line, '* [example checks] send() callback returned: err:', err, '; res:', res);
  });
})
