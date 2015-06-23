var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema ({
	name: String,
	make: String,
	quantity: Number,
	reviews: [{
		type: Schema.Types.ObjectId,
		ref: 'Review' 
	}]
});


module.exports = mongoose.model("Device", DeviceSchema, "devices");