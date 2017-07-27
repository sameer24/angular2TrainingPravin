const mongojs = require('mongojs');

let db = mongojs('synechronpo', ["customers"]);

class Customer {
    constructor() {

    }
    getAllCustomers() {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.customers.find((err, docs) => {
                if (err) {
                    console.log('Customer Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(docs);
            });
        })
    }
    getSingleCustomer(id) {
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
    insertCustomer(customer) {
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
    updateCustomer(customer) {
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
    deleteCustomer(customer) {
        return new Promise((resolve, reject) => {
            let id = customer;
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

module.exports = new Customer();