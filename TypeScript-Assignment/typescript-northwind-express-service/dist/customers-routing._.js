"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const customers_api__1 = require("./webapis/customers.api._");
let customerObject = new customers_api__1.Customer();
exports.customerRoutes = express.Router();
exports.customerRoutes.get('/', (req, res) => {
    let promise = customerObject.getAllCustomers();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.customerRoutes.get('/:id', (req, res) => {
    let id = req.params.id;
    let promise = customerObject.getSingleCustomer(id);
    promise.then((data) => {
        console.log(data);
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.customerRoutes.post('/', (req, res) => {
    let customer = req.body;
    console.log(req);
    let promise = customerObject.insertCustomer(customer);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.customerRoutes.put('/', (req, res) => {
    let customer = req.body;
    console.log(customer);
    let promise = customerObject.updateCustomer(customer);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.customerRoutes.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    let promise = customerObject.deleteCustomer(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
//# sourceMappingURL=customers-routing._.js.map