// requirement definitions
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongo = mongoose.connect('mongodb://localhost/techTracker');
var ObjectId = require('mongoose').Types.ObjectId;	

var Device = require("./devices");
var Review = require("./reviews");
var User = require("./users");




var app = express();

app.get('/api/devices', function(req, res) {
	// WTF do I do here?
});

//Route directory for app client folder
app.use(express.static(__dirname + '../../client'));
console.log(__dirname);

//Port listening for node server
app.listen(3000, function() {
	console.log('Listening on port 3000');
});
	
