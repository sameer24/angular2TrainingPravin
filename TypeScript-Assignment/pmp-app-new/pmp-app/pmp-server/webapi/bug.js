const mongojs = require('mongojs');
let db = mongojs("pmp", ["bug"]);

class Bug {
    constructor() { }

    getAll(){
        let promise = new Promise((resolve, reject) => {
            db.bug.find((err, docs) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve(docs);
            });
        })
        return promise;
    }

    getSingle(id){
        return new Promise((resolve, reject) => {
            db.bug.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve(doc);
            });
        });
    }

    insert(bug){
        let promise = new Promise((resolve, reject) => {
            db.bug.insert(bug, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("bug added successfully");
            });
        });
        return promise;
    }

    update(bug){
        let promise = new Promise((resolve, reject) => {
            db.bug.findAndModify({
                query: { _id: mongojs.ObjectId(bug._id) }, update: {
                    $set: { Id: bug.Id, Address: bug.Address, Name: bug.Name, City: bug.City }
                },
                new: true
            }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("bug updated successfully");
            })
        });
        return promise;
    }

    delete(id){
        console.log(id);
        let promise = new Promise((resolve, reject) => {
            let _id = mongojs.ObjectId(id);
            db.bug.remove({ "_id": _id }, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("bug deleted successfully");
            });
        });
        return promise;
    }
}

module.exports = new Bug();