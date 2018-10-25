var mongoose = require('mongoose');
var mongoURL = process.env.MONGO || "mongodb://kai:kai123@ds119692.mlab.com:19692/hrnyc18-fec";

var db = mongoose.connect(mongoURL, { useNewUrlParser: true }).connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var phocaroSchema = new mongoose.Schema({
	id: Number,
	pictureUrls: [String],
	description: String
})

var PhoCaro = mongoose.model('PhoCaro', phocaroSchema);

module.exports.db = db;
module.exports.PhoCaro = PhoCaro;