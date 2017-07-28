const mongojs = require('mongojs');
let db = mongojs("pmp", ["project"]);

class Project {
    constructor() { }

    getAll(){
        let promise = new Promise((resolve, reject) => {
            db.project.find((err, docs) => {
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
            db.project.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve(doc);
            });
        });
    }

    insert(project){
        let promise = new Promise((resolve, reject) => {
            db.project.insert(project, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("project added successfully");
            });
        });
        return promise;
    }

    update(project){
        let promise = new Promise((resolve, reject) => {
            db.project.findAndModify({
                query: { _id: mongojs.ObjectId(project._id) }, update: {
                    $set: { Id: project.Id, Address: project.Address, Name: project.Name, City: project.City }
                },
                new: true
            }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("project updated successfully");
            })
        });
        return promise;
    }

    delete(id){
        console.log(id);
        let promise = new Promise((resolve, reject) => {
            let _id = mongojs.ObjectId(id);
            db.project.remove({ "_id": _id }, (err) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }
                resolve("project deleted successfully");
            });
        });
        return promise;
    }
}

module.exports = new Project();