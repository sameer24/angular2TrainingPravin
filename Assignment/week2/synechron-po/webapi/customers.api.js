const mongojs = require('mongojs');

let db = mongojs('synechronpo', ["customers"]);

class CustomersDal {
    constructor() {

    }
    getAllCustomers(req, res) {
        res.writeHead(200, { "content-type": "application/json" });
        db.customers.find((err, docs) => {
            if (err) {
                console.log('Customer Fetch Error :' + err)
                return;
            }
            res.write(JSON.stringify(docs));
            res.end();
        });
    }
    getSingleCustomers(req, res, id) {
        res.writeHead(200, { "content-type": "application/json" });
        db.customers.findOne({ _id: mongojs.ObjectID(id) }, (err, doc) => {
            if (err) {
                console.log('Customer Fetch Error :' + err)
                return;
            }
            res.write(JSON.stringify(doc));
            res.end();
        });
    }
    insertCustomers(req, res, customer) {
        db.customers.insert(customer, () => {
            res.write('Record Inserted');
            res.end();
        });
    }
    updateCustomers(req, res, customer) {
        let id = customer._id;
        db.customers.findAndModify(
            {
                query: { _id: mongojs.ObjectID(id) },
                update: { $set: { contactName: customer.contactName, city: customer.city } },
                new: true
            }, (err, doc) => {
                res.writeHead(200, { "content-type": "application/json" });
                res.write(JSON.stringify(doc));
                res.end();
            }
        );
    }
    deleteCustomers(req, res, customer) {
        let id = customer;
        db.customers.remove({
            _id: mongojs.ObjectID(id)
        });
    }
}

module.exports = new CustomersDal();