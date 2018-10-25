var express = require("express");
var bodyParser = require("body-parser");

const PhoCaro = require("../database-mongo/index").PhoCaro;
const db = require("../database-mongo/index").db;

var app = express();

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/listing/:id", (req, res) => {
	var id = req.params.id;
	PhoCaro.find({id: id}, (err, result) => {
		console.log(res)
		res.send(result)
	})
});

app.listen(process.env.PORT || 8080, function() {
  console.log(`listening on port ${process.env.PORT || 3001}`);
});
