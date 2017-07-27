//const mongojs = require('mongojs');
declare function require(name:string);
import mongojs = require("mongojs");
import { Promise } from 'es6-promise';

let db = mongojs('synechronpo', ["orders"]);

export class Orders {
    constructor() {

    }
    getAllOrders():any {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.orders.find((err, docs) => {
                if (err) {
                    console.log('Orders Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        })
    }
    getSingleOrder(id:string):any {
        let promise = new Promise((resolve, reject) => {
            // db.orders.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
            //     if (err) {
            //         reject(err)
            //     }
            //     resolve(doc)
            // })
            db.orders.aggregate({"$match":{ _id: mongojs.ObjectId(id) }},
                { "$lookup": {
                    "localField": "productID",
                    "from": "products",
                    "foreignField": "_id",
                    "as": "productInfo"
                } }, (err, doc) => {
                    if (err) {
                        reject(err)
                    } 
                    //console.log(doc)
                    resolve(doc)
                })
        })
        return promise;
    }
    insertOrder(order:any):any{
        return new Promise((resolve,reject)=>{
            db.orders.insert(order,(err,data)=>{
                if(err){
                    reject(err)
                }
                resolve(data)
            })
        })
    }
}