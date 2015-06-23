//server.js


// BASE SETUP
// ==================================================================


// needed packages
var express = require('express');           // call express
var app = express();                        // define app using express 
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// // mongoose setup
var mongoose = require('mongoose');
var mongo = mongoose.connect('mongodb://localhost/techTracker');

// // Schema Models @ /models
var Device = require("./models/devices");
var Review = require("./models/reviews");
// var User = require("models/users");

// ROUTES FOR API
// =====================================================================

var router = express.Router();              // get an instacne of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(req, res) {
	res.json({ message: 'rad! the api is working!' });
});

// more routes for our API

// routes for /reviews

router.route('/devices/:device_id/reviews')

.post(function(req, res){
	var deviceId = req.params.device_id;
	
	

	var review = new Review();
	review.stars = req.body.stars;
	review.text = req.body.text;
	Device.findById(req.params.device_id, function(err, found){
		console.log("you found" + found);
		found.reviews.push(review);
		found.save(function(err){
			if(err)
				res.send(err);
			console.log('review added to device');

		});
	});
	

	review.save(function(err){
		if (err)
			res.send(err);
		res.json({message: 'Review Added!'});
	});


})

.get(function(req, res){
	Review.find()
	.populate('device')
	.exec(function(err, reviews){
		if (err)
			res.send(err);

		res.json(reviews);
	});
});

// routes for /devices

router.route('/devices')

	// create a device (accessed at POST http://localhost:3000/api/devices)
	.post(function(req, res) {            
		
		var device = new Device();           // create a new instance of the Device model
		device.name = req.body.name;         // set the devices name (comes from the request)
		device.make = req.body.make;         // set the devices make
		device.quantity = req.body.quantity  // set the devices quantity

		var review = new Review();
		review.stars = req.body.stars;
		review.device = device._id;
		device.reviews = review._id;
 

		// save the device and check for errors
		device.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Device Created!' });
		});
	})

	// get all the devices (accessed at GET http://localhost:3000/api/devices)
	.get(function(req, res) {
		Device.find(function(err, devices) {
			if (err)
				res.send(err);

			res.json(devices);
		});
	});

router.route('/devices/:device_id')

  .get(function(req, res){
  	Device.findById(req.params.device_id)
  	.populate('reviews')
  	.exec(function(err, device){
  		if (err)
  			res.send(err);
  		res.json(device);
  	})
  })

	//get the device with that id (accessed at GET http://localhost:3000/api/devices/:device_id)
	// .get(function(req, res) {
	// 	Device.findById(req.params.device_id, function(err, device) {
	// 		if (err)
	// 			res.send(err);
	// 		console.log(device);
			
	// 		res.json(device);
	// 	})

	// })

	//update the device with this id (accessed at PUT http://localhost:8080/api/devices/:device_id)
	.put(function(req,res) {

		// use our device model to find the device we want
		Device.findById(req.params.device_id, function(err, device) {

			if (err)
				res.send(err);

			device.name = req.body.name;        // update the device name
			device.make = req.body.make;        // update the device make
			device.quantity = req.body.quantity // update the quantity

			// save the device
			device.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Device updated!' });
			});

		});
	})

	// delete the bear with this id (accessed at DELETE http://local)
	.delete(function(req, res) {
		Device.remove({
			_id: req.params.device_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Device successfully deleted' });
		});
	});

// REGISTER ROUTES
// all routes prefixed with /api
app.use('/api', router);



// START THE SERVER
// ======================================================================

//Port listening for node server
app.listen(port, function() {
	console.log('Listening on port ' + port);
});
	
//Route directory for app client folder
app.use(express.static(__dirname + '../../client'));
console.log(__dirname);
