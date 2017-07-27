"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongojs = require("mongojs");
let db = mongojs('synechronpo', ["products"]);
class Products {
    constructor() {
    }
    getAllProducts() {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.products.find((err, docs) => {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    getSingleProduct(id) {
        let promise = new Promise((resolve, reject) => {
            db.products.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
        return promise;
    }
    insertProduct(Product) {
        return new Promise((resolve, reject) => {
            db.products.insert(Product, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    updateProduct(Product) {
        return new Promise((resolve, reject) => {
            db.products.findAndModify({
                query: { _id: mongojs.ObjectId(Product._id) },
                update: { $set: { productID: Product.productID, productName: Product.productName } },
                new: true
            }, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    deleteProduct(ProductID) {
        return new Promise((resolve, reject) => {
            let id = ProductID;
            db.products.remove({
                _id: mongojs.ObjectID(id)
            }, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}
exports.Products = Products;
//# sourceMappingURL=products.api._.js.map