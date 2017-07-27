"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//declare var require: any;
const express = require("express");
exports.suppliersRoutes = express.Router();
const suppliers_api__1 = require("./webapis/suppliers.api._");
let suppliersObject = new suppliers_api__1.Suppliers();
//const suppliersRoutes = express.Router();
exports.suppliersRoutes.get('/', (req, res) => {
    let promise = suppliersObject.getAllSuppliers();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.suppliersRoutes.get('/:id', (req, res) => {
    let id = req.params.id;
    let promise = suppliersObject.getSingleSupplier(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.suppliersRoutes.post('/', (req, res) => {
    let Suppliers = req.body;
    let promise = suppliersObject.insertSupplier(Suppliers);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.suppliersRoutes.put('/', (req, res) => {
    let Suppliers = req.body;
    let promise = suppliersObject.updateSupplier(Suppliers);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.suppliersRoutes.delete('/:id', (req, res) => {
    let id = req.params.id;
    let promise = suppliersObject.deleteSupplier(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
//# sourceMappingURL=suppliers-routing._.js.map