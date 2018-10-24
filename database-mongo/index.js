var mongoose = require('mongoose');
var mongoURL = process.env.MONGO || "mongodb://kai:kai123@ds119692.mlab.com:19692/hrnyc18-fec";

mongoose.connect(mongoURL, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



module.exports.db = db;