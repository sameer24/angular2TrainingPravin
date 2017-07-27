const express = require('express');
let customerObject = require('./webapis/customers.api');

const customerRoutes = express.Router();

customerRoutes.get('/',(req,res)=>{
    let promise = customerObject.getAllCustomers();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
customerRoutes.get('/:id', (req, res) => {
    let id = req.params.id
    let promise = customerObject.getSingleCustomer(id);
    promise.then((data) => {
        console.log(data);
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
customerRoutes.post('/', (req, res) => {
    let customer = req.body;
    console.log(req);
    let promise = customerObject.insertCustomer(customer);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
customerRoutes.put('/', (req, res) => {
    let customer = req.body;
    console.log(customer);
    let promise = customerObject.updateCustomer(customer);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
customerRoutes.delete('/:id', (req, res) => {
    let id = req.params.id
    console.log(id);
    let promise = customerObject.deleteCustomer(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})

module.exports = customerRoutes;