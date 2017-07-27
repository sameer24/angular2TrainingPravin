const mongojs = require('mongojs');
const db = mongojs('synepmpdb', ['companies']);
class Companies {
    constructor() {

    }

    getAllCompanies() {

        let promise = new Promise((resolve, reject) => {
            const companies = db.collection('companies');
            db.companies.find((err, docs) => {
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

    getSingleCompany(id) {
        let promise = new Promise((resolve, reject) => {
            try {
                db.companies.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                    if (err) {
                        //console.log(err);
                        reject('Failure!');
                    }
                    resolve(JSON.stringify(doc));
                });
            } catch (error) {
                reject('Failure!');
            }
        });
        return promise;
    }

    insertCompany(company) {

        let promise = new Promise((resolve, reject) => {
            const companies = db.collection('companies');
            db.companies.insert(company, (err, data) => {
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

    updateCompany(company) {
        let id = company._id;

        let promise = new Promise((resolve, reject) => {

            db.companies.findAndModify({
                query: { _id: mongojs.ObjectId(id) },
                update: {
                    $set: {
                        'CompanyId': company.CompanyId,
                        'CompanyName': company.CompanyName,
                        'Description': company.Description,
                        'Logo': company.Logo
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

    deleteCompany(id) {
        let promise = new Promise((resolve, reject) => {

            db.companies.remove({ '_id': mongojs.ObjectId(id) }, (err) => {
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
module.exports = new Companies();