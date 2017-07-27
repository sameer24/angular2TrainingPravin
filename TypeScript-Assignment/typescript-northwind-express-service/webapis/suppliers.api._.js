"use strict";
exports.__esModule = true;
var mongojs = require("mongojs");
var es6_promise_1 = require("es6-promise");
var db = mongojs('synechronpo', ["suppliers"]);
var Suppliers = (function () {
    function Suppliers() {
    }
    Suppliers.prototype.getAllSuppliers = function () {
        return new es6_promise_1.Promise(function (resolve, reject) {
            //res.writeHead(200, { "content-type": "application/json" });
            db.suppliers.find(function (err, docs) {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    };
    Suppliers.prototype.getSingleSupplier = function (id) {
        var promise = new es6_promise_1.Promise(function (resolve, reject) {
            db.suppliers.findOne({ _id: mongojs.ObjectId(id) }, function (err, doc) {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
        return promise;
    };
    Suppliers.prototype.insertSupplier = function (Supplier) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            db.suppliers.insert(Supplier, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    Suppliers.prototype.updateSupplier = function (Supplier) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            db.suppliers.findAndModify({
                query: { _id: mongojs.ObjectId(Supplier._id) },
                update: { $set: { supplierID: Supplier.supplierID, supplierName: Supplier.supplierName } },
                "new": true
            }, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    Suppliers.prototype.deleteSupplier = function (SupplierID) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            var id = SupplierID;
            db.suppliers.remove({
                _id: mongojs.ObjectID(id)
            }, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    return Suppliers;
}());
exports.Suppliers = Suppliers;
