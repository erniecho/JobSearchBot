var everyauth = require('everyauth')
  , connect = require('connect');

everyauth.linkedin
  .consumerKey('Id_Key_Here')
  .consumerSecret('Secert_Key_Here')
  .findOrCreateUser( function (session, accessToken, accessTokenSecret, linkedinUserMetadata) {
    // find or create user logic goes here
  })
  .redirectPath('/');

var routes = function (app) {
  // Define your routes here
};
var DataPrintOut = everyauth.linkedin.callbackPath();
console.log(DataPrintOut);

everyauth.linkedin.post({
  "comment": "Check out developer.linkedin.com!",
  "content": {
    "title": "LinkedIn Developers Resources",
    "description": "Leverage LinkedIn's APIs to maximize engagement",
    "submitted-url": "https://developer.linkedin.com",
    "submitted-image-url": "https://example.com/logo.png"
  },
  "visibility": {
    "code": "anyone"
  }
});
