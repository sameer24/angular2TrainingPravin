const mongojs = require('mongojs');

let db = mongojs('synechronpo', ["categories"]);

class CategoriesDal {
    constructor() {

    }
    getAllCategoriesP() {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.categories.find((err, docs) => {
                if (err) {
                    console.log('Categories Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(docs);
            });
        })
    }
    getSingleCategoriesP(id) {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.categories.findOne({ _id: mongojs.ObjectID(id) }, (err, doc) => {
                if (err) {
                    console.log('Categories Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(doc);
            });
        })
    }
    insertCategoriesP(customer) {
        return new Promise((resolve, reject) => {
            db.categories.insert(customer, (err, data) => {
                if (err) {
                    console.log('Categories Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(data);
            });
        })
    }
    updateCategoriesP(categories) {
        let id = categories._id;
        return new Promise((resolve, reject) => {
            db.categories.findAndModify(
                {
                    query: { _id: mongojs.ObjectID(id) },
                    update: { $set: { categorierID: categories.categorierID, categorieName: categories.categorieName } },
                    new: true
                }, (err, doc) => {
                    if (err) {
                        console.log('Categories Fetch Error :' + err);
                        reject(error);
                        return;
                    }
                    resolve(doc);
                }
            )
        })
    }
    deleteCategoriesP(categories) {
        return new Promise((resolve, reject) => {
            let id = categories;
            db.categories.remove({
                _id: mongojs.ObjectID(id)
            });
        })
    }
}

module.exports = new CategoriesDal();