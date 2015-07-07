module.exports = function(router) {


	var User = require('../models/users');

	router.route('/login')

	.post(function(req,res) {
		User.findOne({ 'email': req.body.email }, function(err, user) {
			if (err) {
				res.send(err);
				return;
			}
			if (user) {
				var validUser = new User();
				if (validUser.validPassword(req.body.password, user.password)){
					res.json(user);
				}
				else {
					res.status(401);
					res.send('Invalid Password');
				}

			}
			else {
				res.status(404);
				res.send('User not found');
			}
		})
	})



}