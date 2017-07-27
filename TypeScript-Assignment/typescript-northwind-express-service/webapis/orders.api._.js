"use strict";
exports.__esModule = true;
var mongojs = require("mongojs");
var es6_promise_1 = require("es6-promise");
var db = mongojs('synechronpo', ["orders"]);
var Orders = (function () {
    function Orders() {
    }
    Orders.prototype.getAllOrders = function () {
        return new es6_promise_1.Promise(function (resolve, reject) {
            //res.writeHead(200, { "content-type": "application/json" });
            db.orders.find(function (err, docs) {
                if (err) {
                    console.log('Orders Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    };
    Orders.prototype.getSingleOrder = function (id) {
        var promise = new es6_promise_1.Promise(function (resolve, reject) {
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
                } }, function (err, doc) {
                if (err) {
                    reject(err);
                }
                //console.log(doc)
                resolve(doc);
            });
        });
        return promise;
    };
    Orders.prototype.insertOrder = function (order) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            db.orders.insert(order, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    return Orders;
}());
exports.Orders = Orders;
