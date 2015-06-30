module.exports = function(router) {
	
	// DEVICE REVIEWS
	// =================================================================

	// // Schema Models @ /models
	var Device = require("../models/devices");
	var Review = require("../models/reviews");

	// routes for /reviews
	router.route('/devices/:device_id/reviews')

	.post(function(req, res) {
		var deviceId = req.params.device_id;

		var review = new Review();
		review.stars = req.body.stars;
		review.text = req.body.text;
		review.author = req.body.author;
		review.createdOn = req.body.createdOn;
		Device.findById(req.params.device_id, function(err, found) {
			console.log("you found" + found);
			found.reviews.push(review);
			found.save(function(err) {
				if (err)
					res.send(err);
				console.log('review added to device');

			});
		});

		review.save(function(err, doc) {
			if (err) {
				res.send(err);
			}
			res.json({
				message: 'Review Added!',
				data: doc
			});
		});
	})

	.get(function(req, res) {
		Device.findById(req.params.device_id)
			.populate('reviews')
			.exec(function(err, device) {
				if (err) {
					res.send(err);
				}

				res.json(device.reviews);
			});
	});

	// REVIEWS
	// ======================================================== 

	// route for /reviews/:review_id
	router.route('/reviews/:review_id')

	//get the review with that id (accessed at GET http://localhost:3000/api/reviews/:review_id)
	.get(function(req, res) {
		Review.findById(req.params.review_id, function(err, found) {
			console.log("you found " + found);
			if (!found) {
				res.send("Review with id " + req.params.review_id + " not found");		
			}
			else {			
				res.json({
					success: true,
					data: found
				});
			}
		});
	})

	// delete the review with that id
	.delete(function(req, res) {
		Review.remove({
			_id: req.params.review_id
		}, function(err, bear) {
			if (err) {
				res.send(err);
			}
			else {
				res.json({
					message: 'Review successfully deleted'
				});
			}

		});
	});
}
