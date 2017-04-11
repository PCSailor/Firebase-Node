console.log(new Date().getFullYear() + ' sumFile is run'); <br>
#Red=hash <br>
*Purple=open/close stars* <br>
**Yellow=open/close 2 stars** <br>
`Green=open/close ticks` <br>
<red> <br>
[Phil Curtis Website](http://philcurtis.io) <br>
1.  Red Numbers <br>
#------------------------------------- <br>
Firebase-Node setup <br>
1.  www.firebase.google.com <br>
    Add Firebase to project (console.firebase.google.com) <br>
    Log in -  <br>
    goto Console -  <br>
    create new project -  <br>
    'Add Firebase to your web app' -  <br>
    Copy Firebase-initialize script code (*Note:* if script field is empty, X out & retry) <br>
2.  Index.html <br>
    Paste Firebase-initialize code into index.html inbetween <head></head> <br>
3.  Index.html <br>
    Add angular-fire and other scripts, angular, firebase. <br>
    3 scripts added to index.html (Google ‘angular fire github’) <br>
		Must be in certain script order: <br>
			angular.js <br>
			firebase.js <br>
			angular-firebase.js (must come after angular.js and firebase.js) <br>
			Firebase-initialize script <br>
			client.js (last and after Firebase-initialize script) <br>
4.  Client.js <br>
    ['firebase'] dependency injection added to .module <br>
    $firebaseAuth added to call function in .controller <br>
    var auth = $firebaseAuth(); added <br>
5.  Index.html <br>
    Set up ng-app and ng-controller (as initiails) <br>
    Add {{sumInitial.message}} <br>
    Start up webpage - Check for message from 1st controller <br>
    Add a LogIn and LogOut button <br>
6.  Client.js <br>
    Decide on OAuth Providers Discussed_Google/FB/Twitter/GitHub/Etc._Firebase/Authentication/Set up   sign-in Method (Google: angular auth signinwithpopup for further info <https://firebase.google.com/docs/reference/js/firebase.auth.Auth> and <https://firebase.google.com/docs/auth/web/google-signin>) <br>
    Function for LogIn button adding OAuth providers <br>
    Function for LogOut button <br>
    Function for $onAuthStateChanged <br>
7.  Index.html
    Create div to receive token data back <br>
8.  App.js <br>
    Create variable and app.use('/sumPath', sumVar) relating to the client.js / url:sumPath <br>
9.  npm install --save firebase-admin <br>
10. New .js file (private-data.js) <br>
    Create .js file with name given in Step 8-variable path name <br>
    Add code <br>
11. www.firebase.google.com <br>
    Goto <https://console.firebase.google.com/project/sumProjectNameHere/settings/serviceaccounts/adminsdk> <br>
    Copy snippet <br>
    'Generate New Privavte Key', rename, & move to project server folder <br>
12. New .js file (private-data.js) <br>
    Paste snippet before router.get <br>
    Set 'var serviceAccount' path to server/firebase-service-account.json <br>
13. .gitignore <br>
    add firebase-service-account.json (This is the secret file, do not put online) <br>
    Double check in terminal (git status) <br>
*Note:* Now Authentication Ends  <br>
*Note:* Now Authorization starts <br>
14. New .js file (private-data.js) <br>
    Hardcode a specific email to test Authorization <br>
15. npm install --save mongoose <br>
    Required if working with Mongo from Node <br>
16. Create models folder and new .js file <br>
    Add code for model and schema <br>
17. New .js file (private-data.js) <br>
    add code to require model .js files <br>
    






