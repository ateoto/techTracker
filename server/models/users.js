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

