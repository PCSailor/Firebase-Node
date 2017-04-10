var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var serviceAccount = require("../firebase-service-account.json");

// <https://console.firebase.google.com/project/sumProjectNameHere/settings/serviceaccounts/adminsdk>
// var serviceAccount = require("path/to/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-node-3ee46.firebaseio.com"
});


router.get('/', function (req, res) {
  admin.auth().verifyIdToken(req.headers.id_token).then(function(decodedToken){
  // .auth returns an object with a function called verifyIdToken and the .then recognizes the correct signature and returns the decoded token.  Here the user has been fully authenticated on the backend.
  console.log(decodedToken);
  // After Authentication success, now add hardcoded Authorization for simplicity
  if(decodedToken.email === "philcurtisengineering@gmail.com"){
    res.send("private-data.js / hardcoded Authorization text sent");
  } else {
  // res.send('Authroized Data revealed: ', decodedToken.name); // Should send back an object but since sending back a string get a firebase error.
  // So to correct error:
  var dataString = " Authroized Data revealed for: " + decodedToken.name;
  res.send(dataString);
  }
})
.catch(function(error) {
  res.send('Authroized Data will not be revealed');
})
});






module.exports = router;
console.log('private-data.js is run');