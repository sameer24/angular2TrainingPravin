const mongojs = require('mongojs');
const db = mongojs('synepmpdb', ['tasks']);
class Tasks {
    constructor() {

    }

    getAllTasks() {

        let promise = new Promise((resolve, reject) => {
            const tasks = db.collection('tasks');
            db.tasks.find((err, docs) => {
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

    getSingleTask(id) {

        let promise = new Promise((resolve, reject) => {

            db.tasks.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
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

    insertTask(task) {
        let promise = new Promise((resolve, reject) => {
            const tasks = db.collection('tasks');
            db.tasks.insert(task, (err, data) => {
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

    updateTask(task) {
        let id = task._id;

        let promise = new Promise((resolve, reject) => {

            db.tasks.findAndModify({
                query: { _id: mongojs.ObjectId(id) },
                update: {
                    $set: {
                        'TaskID': task.TaskId,
                        'Title': task.Title,
                        'Description': task.Description,
                        'UserStoryId': task.UserStoryId,
                        'Status': task.Status,
                        'TaskStartDate': task.StartDate,
                        'TaskUpdatedDate': task, UpdatedDate,
                        'AssignedToEmp': task.AssignTo
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

    deleteTask(id) {
        let promise = new Promise((resolve, reject) => {

            db.tasks.remove({ '_id': mongojs.ObjectId(id) }, (err) => {
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
module.exports = new Tasks();