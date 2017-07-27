//const mongojs = require('mongojs');
declare function require(name:string);
import mongojs = require("mongojs");


let db = mongojs('synechronpo', ["products"]);

export class Products {
    constructor() {

    }
    getAllProducts():any {
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
        })
    }
    getSingleProduct(id:string):any {
        let promise = new Promise((resolve, reject) => {
            db.products.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    reject(err)
                }
                resolve(doc)
            })
        })
        return promise;
    }
    insertProduct(Product:any):any {
        return new Promise((resolve, reject) => {
            db.products.insert(Product, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
    updateProduct(Product:any):any {
        return new Promise((resolve, reject) => {
            db.products.findAndModify({
                query: { _id: mongojs.ObjectId(Product._id) },
                update: { $set: { productID: Product.productID, productName: Product.productName } },
                new: true
            }, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })

        })
    }
    deleteProduct(ProductID:string):any {
        return new Promise((resolve, reject) => {
            let id = ProductID;            
            db.products.remove({
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