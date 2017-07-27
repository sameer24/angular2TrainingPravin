"use strict";
exports.__esModule = true;
var mongojs = require("mongojs");
var es6_promise_1 = require("es6-promise");
var db = mongojs('synechronpo', ["customers"]);
var Customer = (function () {
    function Customer() {
    }
    Customer.prototype.getAllCustomers = function () {
        return new es6_promise_1.Promise(function (resolve, reject) {
            //res.writeHead(200, { "content-type": "application/json" });
            db.customers.find(function (err, docs) {
                if (err) {
                    console.log('Customer Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    };
    Customer.prototype.getSingleCustomer = function (id) {
        var promise = new es6_promise_1.Promise(function (resolve, reject) {
            db.customers.findOne({ _id: mongojs.ObjectId(id) }, function (err, doc) {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
        return promise;
    };
    Customer.prototype.insertCustomer = function (customer) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            console.log(customer);
            db.customers.insert(customer, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    Customer.prototype.updateCustomer = function (customer) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            db.customers.findAndModify({
                query: { _id: mongojs.ObjectId(customer._id) },
                update: { $set: { contactName: customer.contactName, city: customer.city } },
                "new": true
            }, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    Customer.prototype.deleteCustomer = function (customerID) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            var id = customerID;
            db.customers.remove({
                _id: mongojs.ObjectID(id)
            }, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    return Customer;
}());
exports.Customer = Customer;
