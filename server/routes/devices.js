
module.exports = function(router) {
	
	// // Schema Models @ /models
	var Device = require("../models/devices");
	var Review = require("../models/reviews");
	// var User = require("models/users");


	// DEVICES
	// =================================

	// routes for /devices
	router.route('/devices')

	// create a device (accessed at POST http://localhost:3000/api/devices)
	.post(function(req, res) {

		var device = new Device();             // create a new instance of the Device model
		device.name = req.body.name;           // set the devices name (comes from the request)
		device.make = req.body.make;           // set the devices make
		device.quantity = req.body.quantity    // set the devices quantity
		device.image = req.body.image          // set the device image

		// save the device and check for errors
		device.save(function(err) {
			if (err) {
				res.send(err);
			}

			res.json({
				message: 'Device Created!'
			});
		});
	})

	// get all the devices (accessed at GET http://localhost:3000/api/devices)
	.get(function(req, res) {
		Device.find()
			.populate('reviews')
			.populate('checkedOutBy')
			.exec(function(err, devices) {
				if (err) {
					res.send(err);
				}
				res.json(devices);
			});
	});

	router.route('/devices/:device_id')

	//get the device with that id (accessed at GET http://localhost:3000/api/devices/:device_id)
	.get(function(req, res) {
		Device.findById(req.params.device_id)
			.populate('reviews')
			.exec(function(err, device) {
				if (err) {
					res.send(err);
				}
				res.json(device);
			})
	})


	//update the device with this id (accessed at PUT http://localhost:8080/api/devices/:device_id)
	.put(function(req, res) {

		// use our device model to find the device we want
		Device.findById(req.params.device_id, function(err, device) {

			if (err) {
				res.send(err);
			}

			device.name = req.body.name;            // update the device name
			device.make = req.body.make;            // update the device make
			device.quantity = req.body.quantity     // update the quantity
			device.image = req.body.image           // update the device image

			// save the device
			device.save(function(err) {
				if (err) {
					res.send(err);
				}

				res.json({
					message: 'Device updated!'
				});
			});

		});
	})

	// delete the bear with this id (accessed at DELETE http://local)
	.delete(function(req, res) {
		Device.remove({
			_id: req.params.device_id
		}, function(err, bear) {
			if (err) {
				res.send(err);
			}

			res.json({
				message: 'Device successfully deleted'
			});
		});
	});


	router.route('/devices/:device_id/checkOut')

	.put(function(req, res) {

		Device.findById(req.params.device_id, function(err, device) {

			if (err) {
				res.send(err);
			}

			device.checkedOutBy = req.body.checkedOutBy;
			device.checkOutDate = new Date();

			device.save(function(err) {
				if (err) {
					res.send(err);
				}

				res.json({
					message: 'Device successfully checked out'
				});
			});
		});
	})
}