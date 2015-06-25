var mongoose = require('mongoose');
var Device = require('./devices');
var Schema = mongoose.Schema;

var ReviewSchema = Schema ({
	stars: Number,
	text: String,
	author: String,
	createdOn: Date,
	device: {
		type: Schema.Types.ObjectId,
		ref: "Device"
	}
});


module.exports = mongoose.model("Review", ReviewSchema, "reviews");