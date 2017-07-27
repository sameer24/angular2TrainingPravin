"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//declare var require: any;
const express = require("express");
exports.productsRoutes = express.Router();
const products_api__1 = require("./webapis/products.api._");
let productsObject = new products_api__1.Products();
//const productsRoutes = express.Router();
exports.productsRoutes.get('/', (req, res) => {
    let promise = productsObject.getAllProducts();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.productsRoutes.get('/:id', (req, res) => {
    let id = req.params.id;
    let promise = productsObject.getSingleProduct(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.productsRoutes.post('/', (req, res) => {
    let Products = req.body;
    let promise = productsObject.insertProduct(Products);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.productsRoutes.put('/', (req, res) => {
    let Products = req.body;
    let promise = productsObject.updateProduct(Products);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.productsRoutes.delete('/:id', (req, res) => {
    let id = req.params.id;
    res.send(id);
    let promise = productsObject.deleteProduct(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
//# sourceMappingURL=products-routing._.js.map