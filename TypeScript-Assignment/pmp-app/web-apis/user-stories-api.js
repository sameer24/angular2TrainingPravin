const mongojs = require('mongojs');
const db = mongojs('synepmpdb', ['userStories']);
class UserStories {
    constructor() {

    }

    getAllUserStories() {
         
        let promise = new Promise((resolve, reject) => {
            const userStories = db.collection('userStories');
            db.userStories.find((err, docs) => {
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

    getSingleUserStory(id) {

        let promise = new Promise((resolve, reject) => {

            db.userStories.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
                if (err) {
                    reject('Failure!' + err);
                }
                try {
                     resolve(JSON.stringify(doc)); 
                } catch (e) {
                    reject(e);
                }
            });

        });

        return promise;


    }

    insertUserStory(userStory) { 
        let promise = new Promise((resolve, reject) => {
            const userStories = db.collection('userStories');
            db.userStories.insert(userStory, (err, data) => {
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

    updateUserStory(userStory) {
        let id = userStory._id;
       
        let promise = new Promise((resolve, reject) => {

            db.userStories.findAndModify({
                query: { _id: mongojs.ObjectId(id) },
                update: {
                    $set: {
                        'UserStoryId': userStory.UserStoryId,
                        'Title': userStory.Title,
                        'Description': userStory.Description,
                        'ProjectId': userStory.ProjectId,
                        'CreatedDate': userStory.CreatedDate
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

    deleteUserStory(id) {
        let promise = new Promise((resolve, reject) => {

            db.userStories.remove({ '_id': mongojs.ObjectId(id) }, (err) => {
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
module.exports = new UserStories();