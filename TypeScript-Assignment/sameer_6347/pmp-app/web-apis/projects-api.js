const mongojs = require('mongojs');
const db = mongojs('synepmpdb', ['projects']);
class Projects {
    constructor() {

    }

    getAllProjects() {
         
        let promise = new Promise((resolve, reject) => {
            const projects = db.collection('projects');
            db.projects.find((err, docs) => {
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

    getSingleProject(id) {

        let promise = new Promise((resolve, reject) => {

            db.projects.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
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

    insertProject(project) {

        let promise = new Promise((resolve, reject) => {
            const projects = db.collection('projects');
            db.projects.insert(project, (err, data) => {
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

    updateProject(project) {
        let id = project._id;
       
        let promise = new Promise((resolve, reject) => {

            db.projects.findAndModify({
                query: { _id: mongojs.ObjectId(id) },
                update: {
                    $set: {
                        'projectId': project.projectId,
                        'projectCode': project.projectCode,
                        'name': project.name,
                        'startDate': project.startDate,
                        'endDate': project.endDate,
                        'projectGroup': project.projectGroup
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

    deleteProject(id) {
        let promise = new Promise((resolve, reject) => {

            db.projects.remove({ '_id': mongojs.ObjectId(id) }, (err) => {
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
module.exports = new Projects();