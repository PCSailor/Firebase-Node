var app = angular.module('app', ['firebase']);
// Within [] is a dependency injection
app.controller('FirstController', function($firebaseAuth, $http) {
  // only using the Auth part of firebase
  console.log('client.js/ FirstController up and running');
  var self = this;
  self.message = "Client.js / self.message 'message'!"

  var auth = $firebaseAuth();

self.logIn = function(){
  console.log('login is clicked');
  auth.$signInWithPopup("google").then(function(firebaseUser){
  // .then is a promise passing back a firebase user as a detailed object
  // console.log('client.js / firebaseUser authenticated as: ', firebaseUser.user);
  console.log('client.js / firebaseUser authenticated as: ', firebaseUser.user.email);
  }).catch(function(error){
    console.log('client.js / firebaseUser authentication failed: ', error);
  });
};
self.logOut = function(){
  auth.$signOut().then(function(){
    console.log('client.js / firebaseUser logged out');
  });
}



}); // Note: FOR: app.controller


console.log(' ');
console.log(new Date().getFullYear() + ' server/client.js is run');
// Macintosh HD/Users/PC/Desktop/Firebase-Explained-Lecture-Demos/angular-node-express-starter/node_modules/angular/angular.js