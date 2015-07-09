//server.js


// BASE SETUP
// ==================================================================


// needed packages
var express = require('express'); // call express
var app = express(); // define app using express 
var port = process.env.PORT || 3000; // set our port
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// mongodb setup
var configDB = require('./config/database.js');
var mongo = mongoose.connect(configDB.url);

// set up express application
app.use(morgan('dev'));
app.use(cookieParser());

app.set('view engine', 'ejs'); // set up ejs for templating


var setUpRoute = require('./routes/routes.js');
setUpRoute(app, express ,passport);

//Port listening for node server
app.listen(port, function() {
	console.log('Listening on port ' + port);
});


// START THE SERVER
// ======================================================================


//Route directory for app client folder
app.use(express.static(__dirname + '../../client'));
console.log(__dirname);