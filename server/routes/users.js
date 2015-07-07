module.exports = function(router) {

	var User = require("../models/users");
	

	// http:localhost:3000/api/users
	router.route('/users')

	.post(function(req, res) {



		var user = new User();
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;
		user.email = req.body.email;
		user.password = user.generateHash(req.body.password);

		user.save(function(err) {
			if (err) {
				res.send(err);
			}

			res.json({
				message: 'User Created!'
			});
		});
	})

	.get(function(req, res) {
		User.find()
		.exec(function(err,users) {
			if (err) {
				res.send(err);
			}
			res.json(users);
		});
	});

	router.route('/users/:user_id')

	.get(function(req, res) {
		User.findById(req.params.user_id)
		.exec(function(err,user) {
			if (err) {
				res.send(err);
			}
			res.json(user);
		});
	})

	.put(function(req, res) {

		User.findById(req.params.user_id, function(err, user) {

			if(err) {
				res.send(err);
			}

			user.firstName = req.body.firstName;
			user.lastName = req.body.lastName;
			user.email = req.body.email;
			user.password = user.generateHash(req.body.password);

			user.save(function(err) {
				if (err) {
					res.send(err);
				}

				res.json({
					message: 'User updated!'
				});
			});
		});
	})

	.delete(function(req, res) {
		User.remove({
			_id: req.params.user_id
		}, function(err, bear) {
			if (err) {
				res.send(err);
			}

			res.json({
				message: 'User successfully deleted!'
			});
		});
	});




}