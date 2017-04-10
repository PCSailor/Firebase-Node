var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var portDecision = process.env.PORT || 3000;

app.use(express.static('server/public'));
// app.use ('/scripts', express.static(angular.js + '/node_modules/angular/')) FAILED to load app.js
// app.use ('/scripts', express.static("angular.js" + '/node_modules/angular/')) FAILED to find angular.js
// app.use ('/scripts', express.static("angular.js" + './node_modules/angular/')) FAILED to find angular.js
// app.use ('../node_modules/', express.static('angular.js' + '../node_modules/angular/'));

// So you could do something like this to expose a specific module really easy:
// app.use('/static', express.static(__dirname + '/public'));
// app.use('/node_modules/select2', express.static(__dirname + '/node_modules/select2'));
// app.use(express.static(path.join(__dirname, 'node_modules')));

// However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:

// app.use('/static', express.static(path.join(__dirname, 'public')))


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(path.resolve('./server/public/views/index.html'));
});



app.listen(portDecision, function(){
console.log('app.js is run & listening to port', portDecision);
});
