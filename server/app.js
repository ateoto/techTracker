// requirement definitions
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongo = mongoose.connect('mongodb://localhost/techTracker');
var ObjectId = require('mongoose').Types.ObjectId;	

var deviceSchema = {
	name: String,
	make: String,
	quantity: Number
}

var reviewSchema = {
	body: String,
	deviceId: String 
}

var Device = mongoose.model('Device', deviceSchema, 'devices');
var Review = mongoose.model("Review", reviewSchema, 'reviews');

var app = express();

app.get('/api/devices', function(req, res) {
	Device.find(function (err,docs) {

		docs.forEach(function(doc) {
			var id = doc._id.toString();
			
			Review.find({ deviceId: id },function(err,reviews) {
				doc.reviews = reviews
			})

		});
		
		res.send(docs);
	})
});

//Route directory for app client folder
app.use(express.static(__dirname + '../../client'));
console.log(__dirname);

//Port listening for node server
app.listen(3000, function() {
	console.log('Listening on port 3000');
});
	
