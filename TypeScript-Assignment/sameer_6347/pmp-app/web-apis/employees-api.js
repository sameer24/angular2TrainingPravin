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
        return new Promise((resolve, reject) => {
            db.employees.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    console.log("Error" + err);
                    reject(err);
                }                
                resolve(doc);
            });
        });
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
                        'employeeId': employee.employeeId,
                        'address': employee.address,
                        'contact': employee.contact,
                        'city': employee.city,
                        'email': employee.email,
                        'employeeCode': employee.employeeCode,
                        'name': employee.name,
                        'rating':employee.rating
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