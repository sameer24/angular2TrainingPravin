const express = require('express');
const bugRoutes = express.Router();
let bugObject = require('./web-apis/bugs-api');
bugRoutes.get("/",(req,res)=>{
    bugObject.getAllBugs().then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});

bugRoutes.get("/:id",(req,res)=>{
    let id = req.params.id;
    bugObject.getSingleBug(id).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
});
});

bugRoutes.post("/",(req,res)=>{
    let bug  = req.body;
    bugObject.insertBug(bug).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});


bugRoutes.put("/",(req,res)=>{
    let bug  = req.body;
    bugObject.updateBug(bug).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});


bugRoutes.delete("/",(req,res)=>{
    let bug  = req.body;
    let id =  bug._id;
    bugObject.deleteBug(id).then((data)=> {
        res.write(data);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
}); 

module.exports = bugRoutes;
