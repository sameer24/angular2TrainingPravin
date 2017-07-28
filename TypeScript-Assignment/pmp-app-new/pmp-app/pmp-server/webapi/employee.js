const mongojs = require('mongojs');
let db = mongojs("pmp", ["employee"]);

class Employee {
    constructor() { }

    getAll(){
        let promise = new Promise((resolve, reject) => {
            db.employee.find((err, docs) => {
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
            db.employee.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve(doc);
            });
        });
    }

    insert(employee){
        let promise = new Promise((resolve, reject) => {
            db.employee.insert(employee, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("employee added successfully");
            });
        });
        return promise;
    }

    update(employee){
        let promise = new Promise((resolve, reject) => {
            db.employee.findAndModify({
                query: { _id: mongojs.ObjectId(employee._id) }, update: {
                    $set: { Id: employee.Id, Address: employee.Address, Name: employee.Name, City: employee.City }
                },
                new: true
            }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("employee updated successfully");
            })
        });
        return promise;
    }

    delete(id){
        console.log(id);
        let promise = new Promise((resolve, reject) => {
            let _id = mongojs.ObjectId(id);
            db.employee.remove({ "_id": _id }, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("employee deleted successfully");
            });
        });
        return promise;
    }
}

module.exports = new Employee();