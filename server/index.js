var express = require("express");
var bodyParser = require("body-parser");

const db = require("../database-mongo/index").db;

var app = express();

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.json());

app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/listing/:id", (req, res) => {
	var id = req.params.id;
});

app.listen(process.env.PORT || 3001, function() {
  console.log(`listening on port ${process.env.PORT || 3001}`);
});
