"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongojs = require("mongojs");
const es6_promise_1 = require("es6-promise");
let db = mongojs('synechronpo', ["orders"]);
class Orders {
    constructor() {
    }
    getAllOrders() {
        return new es6_promise_1.Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.orders.find((err, docs) => {
                if (err) {
                    console.log('Orders Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    getSingleOrder(id) {
        let promise = new es6_promise_1.Promise((resolve, reject) => {
            // db.orders.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
            //     if (err) {
            //         reject(err)
            //     }
            //     resolve(doc)
            // })
            db.orders.aggregate({ "$match": { _id: mongojs.ObjectId(id) } }, { "$lookup": {
                    "localField": "productID",
                    "from": "products",
                    "foreignField": "_id",
                    "as": "productInfo"
                } }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                //console.log(doc)
                resolve(doc);
            });
        });
        return promise;
    }
    insertOrder(order) {
        return new es6_promise_1.Promise((resolve, reject) => {
            db.orders.insert(order, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}
exports.Orders = Orders;
//# sourceMappingURL=orders.api._.js.map