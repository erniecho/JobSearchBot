var Twit = require('twit')

var T = new Twit({
  consumer_key:         'sceret_id_key',
  consumer_secret:      'sceret_key',
  access_token:         'token_key_id',
  access_token_secret:  'token_seceret_key',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

var textmessage = [
  'Message1',
  "Message2",
  "Message3",

  "Message4",

"Message5",

"Message6",

"Message7",

"Message8",

"Message9",

"Message9",

"Message10"
];

//
//  tweet 'hello world!'
//


//random pick a mesage.
var pickmessage = textmessage[Math.floor(Math.random() * textmessage.length)];
//get today's date.
var dateval = new Date();
//convert the today's date.
var convertdate = dateval.toDateString();
//check to see if pick message is the right length.
if (pickmessage.length > 264) {
  pickmessage = pickmessage.slice(0, 264);
} else {

};

var completeMessage = convertdate + " " + pickmessage;

console.log("messsage: " + completeMessage + " charSize: " +
completeMessage.length);


T.post('statuses/update', { status: completeMessage }, function(err, data, response) {
 console.log(data)
})
