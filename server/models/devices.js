var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema ({
	name: String,
	make: String,
	quantity: Number,
	image: String,
	reviews: [{
		type: Schema.Types.ObjectId,
		ref: 'Review' 
	}],
	checkedOutBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	checkOutDate: Date
});


module.exports = mongoose.model("Device", DeviceSchema, "devices");