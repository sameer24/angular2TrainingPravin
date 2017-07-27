"use strict";
exports.__esModule = true;
var mongojs = require("mongojs");
var es6_promise_1 = require("es6-promise");
var db = mongojs('synechronpo', ["products"]);
var Products = (function () {
    function Products() {
    }
    Products.prototype.getAllProducts = function () {
        return new es6_promise_1.Promise(function (resolve, reject) {
            //res.writeHead(200, { "content-type": "application/json" });
            db.products.find(function (err, docs) {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    };
    Products.prototype.getSingleProduct = function (id) {
        var promise = new es6_promise_1.Promise(function (resolve, reject) {
            db.products.findOne({ _id: mongojs.ObjectId(id) }, function (err, doc) {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
        return promise;
    };
    Products.prototype.insertProduct = function (Product) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            db.products.insert(Product, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    Products.prototype.updateProduct = function (Product) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            db.products.findAndModify({
                query: { _id: mongojs.ObjectId(Product._id) },
                update: { $set: { productID: Product.productID, productName: Product.productName } },
                "new": true
            }, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    Products.prototype.deleteProduct = function (ProductID) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            var id = ProductID;
            db.products.remove({
                _id: mongojs.ObjectID(id)
            }, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    return Products;
}());
exports.Products = Products;
