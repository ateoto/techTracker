
module.exports= function(app, express, passport) {

	var deviceRoutes = require("./devices.js");
	var reviewRoutes = require("./reviews.js");

	
	// ROUTES FOR API
	// =====================================================================

	var router =  express.Router(); // get an instance of the express Router
	deviceRoutes(router);
	reviewRoutes(router);

	// middleware to use for all requests
	router.use(function(req, res, next) {
		// do logging
		console.log('Something is happening.');
		next(); // make sure we go to the next routes and don't stop here
	});

	// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
	router.get('/', function(req, res) {
		res.json({
			message: 'rad! the api is working!'
		});
	});

	// REGISTER ROUTES
	// all routes prefixed with /api
	app.use('/api', router);

}