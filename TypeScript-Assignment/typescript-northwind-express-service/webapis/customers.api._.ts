//const mongojs = require('mongojs');
declare function require(name:string);
import mongojs = require("mongojs");
import { Promise } from 'es6-promise';

let db = mongojs('synechronpo', ["customers"]);


export class Customer {
    constructor() {

    }
    getAllCustomers():any {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.customers.find((err, docs) => {
                if (err) {
                    console.log('Customer Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        })
    }
    getSingleCustomer(id:string):any {
        let promise = new Promise((resolve, reject) => {
            db.customers.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    reject(err)
                }
                resolve(doc)
            })
        })
        return promise;
    }
    insertCustomer(customer:any):any {
        return new Promise((resolve, reject) => {
            console.log(customer)
            db.customers.insert(customer, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
    updateCustomer(customer:any):any {
        return new Promise((resolve, reject) => {
            db.customers.findAndModify({
                query: { _id: mongojs.ObjectId(customer._id) },
                update: { $set: { contactName: customer.contactName, city: customer.city } },
                new: true
            }, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })

        })
    }
    deleteCustomer(customerID:string):any {
        return new Promise((resolve, reject) => {
            let id = customerID;
            db.customers.remove({
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