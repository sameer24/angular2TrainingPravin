const mongojs = require('mongojs');
let db = mongojs("pmp", ["userstory"]);

class Userstory {
    constructor() { }

    getAll() {
        let promise = new Promise((resolve, reject) => {
            db.userstory.find((err, docs) => {
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
            db.userstory.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve(doc);
            });
        });
    }

    insert(userstory) {
        let promise = new Promise((resolve, reject) => {
            db.userstory.insert(userstory, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("userstory added successfully");
            });
        });
        return promise;
    }

    update(userstory) {
        let promise = new Promise((resolve, reject) => {
            db.userstory.findAndModify({
                query: { _id: mongojs.ObjectId(userstory._id) }, update: {
                    $set: { Id: userstory.Id, Address: userstory.Address, Name: userstory.Name, City: userstory.City }
                },
                new: true
            }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("userstory updated successfully");
            })
        });
        return promise;
    }

    delete(id) {
        console.log(id);
        let promise = new Promise((resolve, reject) => {
            let _id = mongojs.ObjectId(id);
            db.userstory.remove({ "_id": _id }, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("userstory deleted successfully");
            });
        });
        return promise;
    }
}

module.exports = new Userstory();