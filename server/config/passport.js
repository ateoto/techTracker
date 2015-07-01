// config/passport.js

// load all the things needed
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

	// =========================================================================
	// passport session setup ==================================================
	// =========================================================================
	// required for persistent login sessions
	// passport needs ability to serialize and unserialize users out of session

	// used to serialize the user for the session
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// used to deserialize the user
	passport.deserializeUser(function(id, done) {
		User.findbyId(id, function(err, user) {
			done(err, user);
		});
	});


	passport.use('local-login', new LocalStrategy({
	     // by default, local strategy uses username and password, we will override with email
	     usernameField : 'email',
	     passwordField : 'password',
	     passReqToCallback : true // allows us to pass back the entire request to the callback
	 },
	 function(email, done) { // callback with email and password from our form

	     // find a user whose email is the same as the forms email
	     // we are checking to see if the user trying to login already exists
	     User.findOne({ 'local.email' :  email }, function(err, user) {
	         // if there are any errors, return the error before anything else
	         if (err)
	             return done(err);

	         // all is well, return successful user
	         return done(null, user);
	     });

	 }));
};