//Import the library
var express = require("express");
var app = express.Router();

//Task with where the elements will be saved
var tasks = [];

//The route to get all the elements is created
app.get("/tasks/", function(req, res) {
  let query = req.query;
  let myTasks;
  if (query.status) {
    myTasks = tasks.filter(
      element => element.status.toString() == query.status
    );
  } else {
    myTasks = tasks;
  }
  res.status(200).send(myTasks);
});

//The route is defined when we want to get a particular element
app.get("/tasks/filter/:name?", function(req, res) {
  let name = req.params.name;
  console.log(name);
  if (name) {
    let myTasks = tasks.filter(element => element.name.includes(name));
    res.send(myTasks);
  } else {
    res.send(tasks);
  }
});

//Definir ruta para obtener una tarea especifica con un id
app.get("/tasks/:id", function(req, res) {
  console.log(req.params);
  let id = req.params.id;
  let myTask = tasks.find(element => element.id == id);
  console.log(myTask);
  if (myTask) res.send(myTask);
  else res.send({ message: "Tarea no encontrada" });
});

/**
 * Create the task
 * REQ: SOLICITUD -> BODY (Es la tarea que voy a registrar)
 * RES: RESPUESTA -> LE VOY A RETORNAR LA TAREAS QUE HAY AGREGADAS
 */
app.post("/tasks/", (req, res) => {
  let body = req.body;
  let id = body.id;
  let myTask = tasks.find(element => element.id == id);

  if (!myTask) {
    tasks.push(body);
    res.status(201).send(tasks);
  } else {
    res.status(400).send({ message: "La tarea ya existe" });
  }
});

/**
 * Modify the task
 * REQ: SOLICITUD -> BODY (Es la tarea que voy a registrar)
 * RES: RESPUESTA -> LE VOY A RETORNAR LA TAREAS QUE HAY AGREGADAS
 */
app.put("/tasks/:id", (req, res) => {
  let body = req.body;
  let id = req.params.id;
  let myTask = tasks.find(element => element.id == id);
  let index = tasks.indexOf(myTask);

  tasks.splice(index, 1, body); //The task is replaced with the new one
  res.send(tasks);
});

app.delete("/tasks/:id", (req, res) => {
  let id = req.params.id;
  let myTask = tasks.find(element => element.id == id);
  let index = tasks.indexOf(myTask);
  //index
  tasks.splice(index, 1); //The task is removed with a given index
  res.send(tasks);
});

module.exports = app;
