var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema ({

	firstName: String,
	lastName: String,
	email: String,
	password: String

});

// methods ====================

// generating a hash
UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// check if password is valid
UserSchema.methods.validPassword = function(password, encrypted) {
	console.log(password);
	console.log(encrypted);
	return bcrypt.compareSync(password, encrypted);
};


module.exports = mongoose.model('User', UserSchema, 'users');

