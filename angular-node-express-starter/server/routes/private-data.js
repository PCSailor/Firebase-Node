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
 console.log(decodedToken);
  if(decodedToken.email === "philcurtisengineering@gmail.com"){
    res.send("private-data.js / hardcoded Authorization sent due to philcurtisengineering@gmail.com");
  } else {
  res.send(" Authroized Data revealed for: " + decodedToken.name);
  }
})
.catch(function(error) {
  res.send('Authroized Data will not be revealed');
})
});






module.exports = router;
console.log('private-data.js is run');