//Need it expresions
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
var list = [];

//GET method
app.get("/", (req, res) => {
  res.send(list);
});

app.post("/", (req, res) => {
  list.push(req.body);
  res.send(list);
});

//Port from
var port = 3000;

app.listen(port, () => {
  console.log("I'm hearing this port");
});
