const db = require("./database-mongo/index").db;
const PhoCaro = require("./database-mongo/index").PhoCaro;

var test = new PhoCaro({id: 1, pictureUrls: ['test'], description: 'asdfsad'})
test.save((err, test) => {
	if (err) console.log(err);
})