"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//declare var require: any;
const express = require("express");
exports.orderRoutes = express.Router();
const orders_api__1 = require("./webapis/orders.api._");
let orderObject = new orders_api__1.Orders();
//const orderRoutes = express.Router();
exports.orderRoutes.get('/', (req, res) => {
    let promise = orderObject.getAllOrders();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.orderRoutes.get('/:id', (req, res) => {
    let id = req.params.id;
    let promise = orderObject.getSingleOrder(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.orderRoutes.post('/', (req, res) => {
    let customer = req.body;
    console.log(req);
    let promise = orderObject.insertOrder(customer);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
//# sourceMappingURL=orders-routing._.js.map