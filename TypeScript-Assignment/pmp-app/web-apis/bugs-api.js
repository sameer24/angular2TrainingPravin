const mongojs = require('mongojs');
const db = mongojs('synepmpdb', ['bugs']);
class Bugs {
    constructor() {

    }

    getAllBugs() {

        let promise = new Promise((resolve, reject) => {
            const bugs = db.collection('bugs');
            db.bugs.find((err, docs) => {
                if (err) {
                    reject('Failure!' + err);
                }
                try {
                    resolve(JSON.stringify(docs));

                } catch (e) {
                    reject(e);
                }
            });

        });

        return promise;
    }

    getSingleBug(id) {

        let promise = new Promise((resolve, reject) => {

            db.bugs.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    reject('Failure!' + err);
                }
                try {
                    resolve(JSON.stringify(doc));
                } catch (e) {
                    reject(e);
                }
            });

        });

        return promise;


    }

    insertBug(bug) {
        let promise = new Promise((resolve, reject) => {
            const bugs = db.collection('bugs');
            db.bugs.insert(bug, (err, data) => {
                if (err) {
                    reject('Failure!' + err);
                }
                try {
                    resolve('Data Inserted Successfully.');
                } catch (e) {
                    reject(e);
                }
            });
        });
        return promise;
    }

    updateBug(bug) {
        let id = bug._id;

        let promise = new Promise((resolve, reject) => {

            db.bugs.findAndModify({
                query: { _id: mongojs.ObjectId(id) },
                update: {
                    $set: {
                        'BugId': bug.BugId,
                        'Title': bug.Title,
                        'Description': bug.Description,
                        'UserStoryId': bug.UserStoryId,
                        'EmployeeId': bug.EmployeeId,
                        'Priority': bug.Priority,
                        'Status': bug.Status,
                    }
                },
                new: true
            }, (err, doc) => {
                if (err) {
                    reject('Failure!' + err);
                }
                try {
                    resolve("Record Updated Successfully.");
                } catch (e) {
                    reject(e);
                }
            });


        });


        return promise;



    }

    deleteBug(id) {
        let promise = new Promise((resolve, reject) => {

            db.bugs.remove({ '_id': mongojs.ObjectId(id) }, (err) => {
                if (err) {
                    reject('Failure!' + err);
                }
                try {
                    resolve("Data deleted Successfully.");
                } catch (e) {
                    reject(e);
                }
            });
        });

        return promise;
    }
}
module.exports = new Bugs();