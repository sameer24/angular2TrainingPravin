const express = require('express');
const employeeRoutes = express.Router();
let employeeObject = require('./web-apis/employees-api');
employeeRoutes.get("/",(req,res)=>{
    employeeObject.getAllEmployees().then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});

employeeRoutes.get("/:id",(req,res)=>{
     let id = req.params.id;
    employeeObject.getSingleEmployee(id).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
});
});

employeeRoutes.post("/",(req,res)=>{
    let employee  = req.body;
    employeeObject.insertEmployee(employee).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});


employeeRoutes.put("/",(req,res)=>{
    let employee  = req.body;
    employeeObject.updateEmployee(employee).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});


employeeRoutes.delete("/",(req,res)=>{
    let employee  = req.body;
    let id =  employee._id;
    employeeObject.deleteEmployee(id).then((data)=> {
        res.write(data);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
}); 

module.exports = employeeRoutes;
