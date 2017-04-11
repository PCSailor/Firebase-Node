var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var serviceAccount = require("../firebase-service-account.json");
var User = require('../models/users');
var Secret = require('../models/secret');
// Start connecting to database
var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost:27017/phi';
mongoose.connect(connectionString);
mongoose.connection.on('connected', function(){
  console.log('Mongoose database connection');
});
mongoose.connection.on('error', function(err){
  console.log('Mongoose database connection error ', err);
});
// END connecting to database

// <https://console.firebase.google.com/project/sumProjectNameHere/settings/serviceaccounts/adminsdk>
// var serviceAccount = require("path/to/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-node-3ee46.firebaseio.com"
});

router.get('/', function (req, res) {
  admin.auth().verifyIdToken(req.headers.id_token).then(function(decodedToken){
 console.log(decodedToken);
var userEmail = decodedToken.email; // creating variable which equals the decoded token email.
User.findOne({ email: userEmail }, function(err, user){
  if(err) {
    console.log('Error completing user query');
    res.sendStatus(500);
  } else {
    console.log(user);
    Secret.find({ secrecyLevel: { $lte: user.clearanceLevel } }, function(err, secrets) {
      if(err) {
        console.log('Error completing secrecyLevel query task ',err);
        res.sendStatus(500);
          } else {
            console.log(secrets);
            res.send(secrets);
          }
    });
  //  Hard-coding authorization no longer used
  //     if(user.clearanceLevel === 5){
  //   res.send("private-data.js / hardcoded Authorization sent due to philcurtisengineering@gmail.com");
  // } else {
  // res.send(" Authroized Data revealed for: " + decodedToken.name);
  // }
  }
})
// findOne ensures only one object will be returned and faster query because as soon as one is found it is returned instead of going through everything.
// This returns the one object equaling whatever email the currently logged on user has.
})
.catch(function(error) {
  res.send('Authroized Data will not be revealed');
})
});
module.exports = router;
console.log(new Date().getFullYear() + ' private-data.js is run');