const mongojs = require('mongojs');

let db = mongojs('synechronpo', ["products"]);

class ProductsDal {
    constructor() {

    }
    getAllProductsP() {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.products.find((err, docs) => {
                if (err) {
                    console.log('Products Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(docs);
            });
        })
    }
    getSingleProductsP(id) {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.products.findOne({ _id: mongojs.ObjectID(id) }, (err, doc) => {
                if (err) {
                    console.log('Products Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(doc);
            });
        })
    }
    insertProductsP(customer) {
        return new Promise((resolve, reject) => {
            db.products.insert(customer, (err, data) => {
                if (err) {
                    console.log('Products Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(data);
            });
        })
    }
    updateProductsP(products) {
        let id = products._id;
        return new Promise((resolve, reject) => {
            db.products.findAndModify(
                {
                    query: { _id: mongojs.ObjectID(id) },
                    update: { $set: { productName: products.productName, productID:products.productID } },
                    new: true
                }, (err, doc) => {
                    if (err) {
                        console.log('products Fetch Error :' + err);
                        reject(error);
                        return;
                    }
                    resolve(doc);
                }
            )
        })
    }
    deleteProductsP(products) {
        return new Promise((resolve, reject) => {
            let id = products;
            db.products.remove({
                _id: mongojs.ObjectID(id)
            });
        })
    }
}

module.exports = new ProductsDal();