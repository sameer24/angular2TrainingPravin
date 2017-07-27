const mongojs = require('mongojs');
const db = mongojs('synepmpdb', ['employees']);
class Employees {
    constructor() {

    }

    getAllEmployees() {

        let promise = new Promise((resolve, reject) => {
            const employees = db.collection('employees');
            db.employees.find((err, docs) => {
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

    getSingleEmployee(id) {

        let promise = new Promise((resolve, reject) => {

            db.customers.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    reject('Failure!' + err);
                }
                try {
                    resolve("Data inserted Successfully.");

                } catch (e) {
                    reject(e);
                }
            });

        });

        return promise;


    }

    insertEmployee(employee) {

        let promise = new Promise((resolve, reject) => {
            const employees = db.collection('employees');
            db.employees.insert(employee, (err, data) => {
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

    updateEmployee(employee) {
        let id = employee._id;
        console.log(employee);

        let promise = new Promise((resolve, reject) => {

            db.employees.findAndModify({
                query: { _id: mongojs.ObjectId(id) },
                update: {
                    $set: {
                        'EmployeeId': employee.EmployeeId,
                        'Name': employee.Name,
                        'Address': employee.Address,
                        'City': employee.City,
                        'Email': employee.Email,
                        'ContactNo': employee.ContactNo,
                        'ProjectId': employee.ProjectId
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

    deleteEmployee(id) {
        let promise = new Promise((resolve, reject) => {

            db.employees.remove({ '_id': mongojs.ObjectId(id) }, (err) => {
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
module.exports = new Employees();