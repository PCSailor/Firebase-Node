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

self.$onAuthStateChanged(function(firebaseUser){
// anonymous function run with either the logIn or logOut function is run
  if(firebaseUser){
    firebaseUser.getToken().then(function(idToken){
      // creating the token and returning token to backend 
      $http({
        method: 'GET', // passing an object, do not have to pass an object but this time is
        url: '/privateData',
        // Need to pass the token back but GET requests/methods dont have body/data; so will pass the token within a header.
        headers: {
          id_token: idToken // can name both sides the same but not here for clarity
       }
      }).then(function(response) {
        self.secretData = response.data; //  Angular normal GET request with a response, with difference of headers
      });
    });
  }
});

self.logOut = function(){
  auth.$signOut().then(function(){
    console.log('client.js / firebaseUser logged out');
  });
};


}); // Note: FOR: app.controller


console.log(' ');
console.log(new Date().getFullYear() + ' server/client.js is run');
// Macintosh HD/Users/PC/Desktop/Firebase-Explained-Lecture-Demos/angular-node-express-starter/node_modules/angular/angular.js