var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var privateData = require('./routes/private-data');
var portDecision = process.env.PORT || 3000;

app.use(express.static('server/public'));

app.use(express.static('./node_modules/angular'));
// However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
// app.use('/static', express.static(path.join(__dirname, 'public')))

// app.use('/static', express.static(path.join(__dirname, 'public')))



app.use('/privateData', privateData);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(path.resolve('./server/public/views/index.html'));
});



app.listen(portDecision, function(){
console.log(new Date().getFullYear() + ' app.js is run & listening to port', portDecision);
});
