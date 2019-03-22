//Need it expresions
var express = require("express");
var app = express.Router();
var list = [];

//GET method
app.get("/tasks/", (req, res) => {
  res.send(list);
});

//GET method with a given id
app.get("/tasks/one/:id", (req, res) => {
  let id = req.params.id;//get the parameter id
  var element = list.find(i => i.id == id);
  if(element)
    res.send(element);
  else  
    res.send({message: "Task not found"});
});

//GET method with a given id
app.get("/tasks/filter/:name?", (req, res) => {
  let name = req.params.name;
  if(name){
    let myTask = list.filter(i => i.name.includes(name));
    if(myTask)
      res.send(myTask);
    else
      res.send({message: 'Task not found'});
  }else{
    res.send(list);
  }   
});


//POST method LOOK LIBRARY FS
app.post("/tasks/", (req, res) => {
  list.push(req.body);
  res.send(list);
});

module.exports = app;