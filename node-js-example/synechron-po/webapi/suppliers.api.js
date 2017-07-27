const mongojs = require('mongojs');

let db = mongojs('synechronpo', ["suppliers"]);

class SuppliersDal {
    constructor() {

    }
    getAllSuppliersP() {
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
    getSingleSuppliersP(id) {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.suppliers.findOne({ _id: mongojs.ObjectID(id) }, (err, doc) => {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(doc);
            });
        })
    }
    insertSuppliersP(customer) {
        return new Promise((resolve, reject) => {
            db.suppliers.insert(customer, (err, data) => {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(data);
            });
        })
    }
    updateSuppliersP(suppliers) {
        let id = suppliers._id;
        return new Promise((resolve, reject) => {
            db.suppliers.findAndModify(
                {
                    query: { _id: mongojs.ObjectID(id) },
                    update: { $set: { supplierName: suppliers.contactName,supplierID:suppliers.supplierID } },
                    new: true
                }, (err, doc) => {
                    if (err) {
                        console.log('Suppliers Fetch Error :' + err);
                        reject(error);
                        return;
                    }
                    resolve(doc);
                }
            )
        })
    }
    deleteSuppliersP(suppliers) {
        return new Promise((resolve, reject) => {
            let id = suppliers;
            db.suppliers.remove({
                _id: mongojs.ObjectID(id)
            });
        })
    }
}

module.exports = new SuppliersDal();