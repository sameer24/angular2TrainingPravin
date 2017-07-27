const mongojs = require('mongojs');

let db = mongojs('synechronpo', ["suppliers"]);

class Suppliers {
    constructor() {

    }
    getAllSuppliers() {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.suppliers.find((err, docs) => {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(docs);
            });
        })
    }
    getSingleSupplier(id) {
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
    insertSupplier(Supplier) {
        return new Promise((resolve, reject) => {
            console.log(Supplier)
            db.suppliers.insert(Supplier, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
    updateSupplier(Supplier) {
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
    deleteSupplier(Supplier) {
        return new Promise((resolve, reject) => {
            let id = Supplier;
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

module.exports = new Suppliers();