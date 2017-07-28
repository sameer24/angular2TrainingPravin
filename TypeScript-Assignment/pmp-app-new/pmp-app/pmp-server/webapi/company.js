const mongojs = require('mongojs');
let db = mongojs("pmp", ["company"]);

class Company {
    constructor() { }

    getAll() {
        let promise = new Promise((resolve, reject) => {
            db.company.find((err, docs) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve(docs);
            });
        })
        return promise;
    }

    getSingle(id) {
        return new Promise((resolve, reject) => {


            try {
                db.company.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                    if (err) {
                        console.log("Error" + err);
                        reject(err);
                    }
                    resolve(doc);
                });
            } catch (err) {
                reject("Invalid Id");
            }
        });
    }

    insert(company) {
        let promise = new Promise((resolve, reject) => {
            db.company.insert(company, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("company added successfully");
            });
        });
        return promise;
    }

    update(company) {
        let promise = new Promise((resolve, reject) => {
            db.company.findAndModify({
                query: { _id: mongojs.ObjectId(company._id) }, update: {
                    $set: { Id: company.Id, Address: company.Address, Name: company.Name, City: company.City }
                },
                new: true
            }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("company updated successfully");
            })
        });
        return promise;
    }

    delete(id) {
        console.log(id);
        let promise = new Promise((resolve, reject) => {
            let _id = mongojs.ObjectId(id);
            db.company.remove({ "_id": _id }, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("company deleted successfully");
            });
        });
        return promise;
    }
}

module.exports = new Company();