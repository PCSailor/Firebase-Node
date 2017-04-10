console.log(new Date().getFullYear() + ' angular-ui-router.js is run');
--
#Red=hash
*Purple=open/close stars*
**Yellow=open/close 2 stars**
`Green=open/close ticks`
<red>
[Phil Curtis Website](http://philcurtis.io)
1.  Red Numbers
#-------------------------------------
Firebase-Node setup
1.  www.firebase.google.com
    Add Firebase to project (console.firebase.google.com)
    Log in - 
    goto Console - 
    create new project - 
    'Add Firebase to your web app' - 
    Copy Firebase-initialize script code (*Note:* if script field is empty, X out & retry)
2.  Index.html
    Paste Firebase-initialize code into index.html inbetween <head></head>
3.  Index.html
    Add angular-fire and other scripts, angular, firebase.
    3 scripts added to index.html (Google ‘angular fire github’)
		Must be in certain script order:
			angular.js
			firebase.js
			angular-firebase.js (must come after angular.js and firebase.js)
			Firebase-initialize script
			client.js (last and after Firebase-initialize script)
4.  Client.js
    ['firebase'] dependency injection added to .module
    $firebaseAuth added to call function in .controller
    var auth = $firebaseAuth(); added
5.  Index.html
    Set up ng-app and ng-controller (as initiails)
    Add {{sumInitial.message}}
    Start up webpage - Check for message from 1st controller
    Add a LogIn and LogOut button
6.  Client.js
    Decide on OAuth Providers Discussed_Google/FB/Twitter/GitHub/Etc._Firebase/Authentication/Set up   sign-in Method (Google: angular auth signinwithpopup for further info<https://firebase.google.com/docs/reference/js/firebase.auth.Auth> and <https://firebase.google.com/docs/auth/web/google-signin>)
    Functions for LogIn and LogOut buttons adding OAuth providers

