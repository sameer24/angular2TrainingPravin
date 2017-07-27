declare function require(name:any);
//declare var require: any;
const express = require("express");
export const orderRoutes = express.Router();
import { Orders } from "./webapis/orders.api._";
let orderObject = new Orders();

//const orderRoutes = express.Router();

orderRoutes.get('/',(req,res)=>{
    let promise = orderObject.getAllOrders();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
orderRoutes.get('/:id', (req, res) => {
    let id = req.params.id
    let promise = orderObject.getSingleOrder(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
orderRoutes.post('/', (req, res) => {
    let customer = req.body;
    console.log(req);
    let promise = orderObject.insertOrder(customer);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})