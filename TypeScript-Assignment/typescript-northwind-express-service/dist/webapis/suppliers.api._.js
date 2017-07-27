"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongojs = require("mongojs");
const es6_promise_1 = require("es6-promise");
let db = mongojs('synechronpo', ["suppliers"]);
class Suppliers {
    constructor() {
    }
    getAllSuppliers() {
        return new es6_promise_1.Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.suppliers.find((err, docs) => {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    getSingleSupplier(id) {
        let promise = new es6_promise_1.Promise((resolve, reject) => {
            db.suppliers.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
        return promise;
    }
    insertSupplier(Supplier) {
        return new es6_promise_1.Promise((resolve, reject) => {
            db.suppliers.insert(Supplier, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    updateSupplier(Supplier) {
        return new es6_promise_1.Promise((resolve, reject) => {
            db.suppliers.findAndModify({
                query: { _id: mongojs.ObjectId(Supplier._id) },
                update: { $set: { supplierID: Supplier.supplierID, supplierName: Supplier.supplierName } },
                new: true
            }, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    deleteSupplier(SupplierID) {
        return new es6_promise_1.Promise((resolve, reject) => {
            let id = SupplierID;
            db.suppliers.remove({
                _id: mongojs.ObjectID(id)
            }, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}
exports.Suppliers = Suppliers;
//# sourceMappingURL=suppliers.api._.js.map