"use strict";
exports.__esModule = true;
var mongojs = require("mongojs");
var es6_promise_1 = require("es6-promise");
var db = mongojs('synechronpo', ["categories"]);
var Categories = (function () {
    function Categories() {
    }
    Categories.prototype.getAllCategories = function () {
        return new es6_promise_1.Promise(function (resolve, reject) {
            //res.writeHead(200, { "content-type": "application/json" });
            db.categories.find(function (err, docs) {
                if (err) {
                    console.log('Categories Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    };
    Categories.prototype.getSingleCategorie = function (id) {
        var promise = new es6_promise_1.Promise(function (resolve, reject) {
            db.categories.findOne({ _id: mongojs.ObjectId(id) }, function (err, doc) {
                if (err) {
                    reject(err);
                }
                console.log(doc);
                resolve(doc);
            });
        });
        return promise;
    };
    Categories.prototype.insertCategorie = function (Categories) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            console.log(Categories);
            db.categories.insert(Categories, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    Categories.prototype.updateCategorie = function (Categories) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            db.categories.findAndModify({
                query: { _id: mongojs.ObjectId(Categories._id) },
                update: { $set: { categorierID: Categories.categorierID, categorieName: Categories.categorieName } },
                "new": true
            }, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    Categories.prototype.deleteCategorie = function (Categories) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            var id = Categories;
            db.categories.remove({
                _id: mongojs.ObjectId(id)
            }, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    return Categories;
}());
exports.Categories = Categories;
