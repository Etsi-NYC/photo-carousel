var express = require("express");
var path = require("path");
var router = express.Router();
const PhoCaro = require("../database-mongo/index").PhoCaro;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

router.get("/listing/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

router.get("/api/:id", (req, res) => {
  var id = req.params.id;
  PhoCaro.find({ id: id }, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

router.get("*", (req, res) => {
  res.header(404).redirect("https://i.kym-cdn.com/photos/images/original/000/204/320/404.png");
});

module.exports = router;
