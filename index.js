//The library is imported
var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(bodyparser.json());
app.use("/", require("./routes/tasks"));

var port = process.env.PORT || 3000;
//The server is called with a port
app.listen(port, () => {
  console.log(`My API is running`);
});
