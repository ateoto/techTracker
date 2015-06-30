var mongoose = require('mongoose');
var bcrtypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema ({

	local : {
		email: String,
		password: String
	},
	facebook : {
		id : String,
		token: String,
		email: String,
		name: String
	},
	twitter : {
		id : String,
		token: String,
		displayName : String,
		userName: String
	},
	google : {
		id : String,
		token : String,
		email : String,
		name : String
	}

});

// methods ====================

// generating a hash
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt,genSaltSync(8), null);
};

// check if password is valid
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', userSchema);

