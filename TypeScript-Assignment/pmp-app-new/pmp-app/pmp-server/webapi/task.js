const mongojs = require('mongojs');
let db = mongojs("pmp", ["task"]);

class Task {
    constructor() { }

    getAll() {
        let promise = new Promise((resolve, reject) => {
            db.task.find((err, docs) => {
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
            db.task.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve(doc);
            });
        });
    }

    insert(task) {
        let promise = new Promise((resolve, reject) => {
            db.task.insert(task, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("task added successfully");
            });
        });
        return promise;
    }

    update(task) {
        let promise = new Promise((resolve, reject) => {
            db.task.findAndModify({
                query: { _id: mongojs.ObjectId(task._id) }, update: {
                    $set: { Id: task.Id, Address: task.Address, Name: task.Name, City: task.City }
                },
                new: true
            }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("task updated successfully");
            })
        });
        return promise;
    }

    delete(id) {
        console.log(id);
        let promise = new Promise((resolve, reject) => {
            let _id = mongojs.ObjectId(id);
            db.task.remove({ "_id": _id }, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("task deleted successfully");
            });
        });
        return promise;
    }
}

module.exports = new Task();