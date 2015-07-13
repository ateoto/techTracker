var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema ({

	firstName: String,
	lastName: String,
	email: String,
	password: String,
	device: {
		type: Schema.Types.ObjectId,
		ref: "Device"
	}

});

// methods ====================

// generating a hash
UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// check if password is valid
UserSchema.methods.validPassword = function(password, encrypted) {
	return bcrypt.compareSync(password, encrypted);
};


module.exports = mongoose.model('User', UserSchema, 'users');

