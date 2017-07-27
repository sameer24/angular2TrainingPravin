//const mongojs = require('mongojs');
declare function require(name:string);
import mongojs = require("mongojs");
import { Promise } from 'es6-promise';

let db = mongojs('synechronpo', ["suppliers"]);

export class Suppliers {
    constructor() {

    }
    getAllSuppliers():any {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.suppliers.find((err, docs) => {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        })
    }
    getSingleSupplier(id:string):any {
        let promise = new Promise((resolve, reject) => {
            db.suppliers.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    reject(err)
                }
                resolve(doc)
            })
        })
        return promise;
    }
    insertSupplier(Supplier:any):any {
        return new Promise((resolve, reject) => {
            db.suppliers.insert(Supplier, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
    updateSupplier(Supplier:any):any {
        return new Promise((resolve, reject) => {
            db.suppliers.findAndModify({
                query: { _id: mongojs.ObjectId(Supplier._id) },
                update: { $set: { supplierID: Supplier.supplierID, supplierName: Supplier.supplierName } },
                new: true
            }, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })

        })
    }
    deleteSupplier(SupplierID:string):any {
        return new Promise((resolve, reject) => {
            let id = SupplierID;
            db.suppliers.remove({
                _id: mongojs.ObjectID(id)
            }, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            });
        })
    }
}