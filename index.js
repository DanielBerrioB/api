//Need it expresions
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

app.use('/', require('./routes/tasks'));

//Port from
var port = 3000;

app.listen(port, () => {
  console.log("I'm hearing this port");
});