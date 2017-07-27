const express = require('express');
const projectRoutes = express.Router();
let projectObject = require('./web-apis/projects-api');
projectRoutes.get("/",(req,res)=>{
    projectObject.getAllProjects().then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});

projectRoutes.get("/:id",(req,res)=>{
     let id = req.params.id;
    projectObject.getSingleProject(id).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
});
});

projectRoutes.post("/",(req,res)=>{
    let project  = req.body;
    projectObject.insertProject(project).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});


projectRoutes.put("/",(req,res)=>{
    let project  = req.body;
    projectObject.updateProject(project).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});


projectRoutes.delete("/",(req,res)=>{
    let project  = req.body;
    let id =  project._id;
    projectObject.deleteProject(id).then((data)=> {
        res.write(data);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
}); 

module.exports = projectRoutes;
