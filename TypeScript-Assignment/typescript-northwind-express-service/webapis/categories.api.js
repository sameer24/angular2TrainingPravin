const mongojs = require('mongojs');

let db = mongojs('synechronpo', ["categories"]);

class Categories {
    constructor() {

    }
    getAllCategories() {
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
    getSingleCategorie(id) {
        let promise = new Promise((resolve, reject) => {
            db.categories.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    reject(err)
                }
                console.log(doc)
                resolve(doc)
            })
        })
        return promise;
    }
    insertCategorie(Categories) {
        return new Promise((resolve, reject) => {
            console.log(Categories)
            db.categories.insert(Categories, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
    updateCategorie(Categories) {
        return new Promise((resolve, reject) => {
            db.categories.findAndModify({
                query: { _id: mongojs.ObjectId(Categories._id) },
                update: { $set: { categorierID: Categories.categorierID, categorieName: Categories.categorieName } },
                new: true
            }, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })

        })
    }
    deleteCategorie(Categories) {
        return new Promise((resolve, reject) => {
            let id = Categories;
            db.categories.remove({
                _id: mongojs.ObjectID(id)
            }, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            });
        })
    }
}

module.exports = new Categories();