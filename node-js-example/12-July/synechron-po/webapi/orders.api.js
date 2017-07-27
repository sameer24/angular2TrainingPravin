const mongojs = require('mongojs');

let db = mongojs('synechronpo', ["orders"]);

class OrdersDal {
    constructor() {

    }
    getAllOrdersP() {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.orders.find((err, docs) => {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(docs);
            });
        })
    }
    getSingleOrdersP(id) {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.orders.findOne({ _id: mongojs.ObjectID(id) }, (err, doc) => {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(doc);
            });
        })
    }
    insertOrdersP(customer) {
        return new Promise((resolve, reject) => {
            db.orders.insert(customer, (err, data) => {
                if (err) {
                    console.log('Suppliers Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(data);
            });
        })
    }
    updateOrdersP(orders) {
        let id = orders._id;
        return new Promise((resolve, reject) => {
            db.orders.findAndModify(
                {
                    query: { _id: mongojs.ObjectID(id) },
                    update: { $set: { orderID:orders.orderID,orderQTY:orders.orderQTY,productID:orders.productID } },
                    new: true
                }, (err, doc) => {
                    if (err) {
                        console.log('Suppliers Fetch Error :' + err);
                        reject(error);
                        return;
                    }
                    resolve(doc);
                }
            )
        })
    }
    deleteOrdersP(orders) {
        return new Promise((resolve, reject) => {
            let id = orders;
            db.orders.remove({
                _id: mongojs.ObjectID(id)
            });
        })
    }
}

module.exports = new OrdersDal();