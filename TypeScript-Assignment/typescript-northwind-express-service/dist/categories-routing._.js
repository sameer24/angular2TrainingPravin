"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//declare var require: any;
const express = require("express");
exports.categoriesRoutes = express.Router();
const categories_api__1 = require("./webapis/categories.api._");
let categoryObject = new categories_api__1.Categories();
exports.categoriesRoutes.get('/', (req, res) => {
    let promise = categoryObject.getAllCategories();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.categoriesRoutes.get('/:id', (req, res) => {
    let id = req.params.id;
    let promise = categoryObject.getSingleCategorie(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.categoriesRoutes.post('/', (req, res) => {
    let categories = req.body;
    let promise = categoryObject.insertCategorie(categories);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.categoriesRoutes.put('/', (req, res) => {
    let categories = req.body;
    let promise = categoryObject.updateCategorie(categories);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
exports.categoriesRoutes.delete('/:id', (req, res) => {
    let id = req.params.id;
    let promise = categoryObject.deleteCategorie(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
//module.exports = categoriesRoutes; 
//# sourceMappingURL=categories-routing._.js.map