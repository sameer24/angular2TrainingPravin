const express = require('express');
let suppliersObject = require('./webapis/suppliers.api');

const suppliersRoutes = express.Router();

suppliersRoutes.get('/',(req,res)=>{
    let promise = suppliersObject.getAllSuppliers();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
suppliersRoutes.get('/:id', (req, res) => {
    let id = req.params.id
    let promise = suppliersObject.getSingleSupplier(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
suppliersRoutes.post('/', (req, res) => {
    let Suppliers = req.body;    
    let promise = suppliersObject.insertSupplier(Suppliers);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
suppliersRoutes.put('/', (req, res) => {
    let Suppliers = req.body;
    let promise = suppliersObject.updateSupplier(Suppliers);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
suppliersRoutes.delete('/:id', (req, res) => {
    let id = req.params.id
    let promise = suppliersObject.deleteSupplier(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})

module.exports = suppliersRoutes;