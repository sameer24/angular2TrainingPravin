const mongojs = require('mongojs');

let db = mongojs('synechronfutureevent', ["events"]);

class Events {
    constructor() {

    }
    getAllEvents() {
        return new Promise((resolve, reject) => {
            //res.writeHead(200, { "content-type": "application/json" });
            db.events.find((err, docs) => {
                if (err) {
                    console.log('events Fetch Error :' + err);
                    reject(error);
                    return;
                }
                resolve(docs);
            });
        })
    }
    getSingleEvent(id) {
        let promise = new Promise((resolve, reject) => {
            db.events.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    reject(err)
                }
                console.log(doc)
                resolve(doc)
            })
        })
        return promise;
    }
    insertEvent(events) {
        return new Promise((resolve, reject) => {
            console.log(events)
            db.events.insert(events, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
    updateEvent(events) {
        return new Promise((resolve, reject) => {
            db.events.findAndModify({
                query: { _id: mongojs.ObjectId(events._id) },
                update: { $set: { eventID: events.eventID, eventCode: events.eventCode,
                eventName:events.eventName,description:events.description,startDate:events.startDate,
                endDate:events.endDate,totalRegistration:events.totalRegistration,
                fees:events.fees,logo:events.logo
            
         } },
                new: true
            }, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })

        })
    }
    deleteEvent(events) {
        return new Promise((resolve, reject) => {
            let id = events;
            db.events.remove({
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

module.exports = new Events();