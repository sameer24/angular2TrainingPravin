const express = require('express');
const taskRoutes = express.Router();
let taskObject = require('./web-apis/tasks-api');
taskRoutes.get("/",(req,res)=>{
    taskObject.getAllTasks().then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});

taskRoutes.get("/:id",(req,res)=>{
     let id = req.params.id;
    taskObject.getSingleTask(id).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
});
});

taskRoutes.post("/",(req,res)=>{
    let task  = req.body;
    taskObject.insertTask(task).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});


taskRoutes.put("/",(req,res)=>{
    let task  = req.body;
    taskObject.updateTask(task).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});


taskRoutes.delete("/",(req,res)=>{
    let task  = req.body;
    let id =  task._id;
    taskObject.deleteTask(id).then((data)=> {
        res.write(data);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
}); 

module.exports = taskRoutes;
