const express = require('express');
const userStoryRoutes = express.Router();
let userStoryObject = require('./web-apis/user-stories-api');
userStoryRoutes.get("/",(req,res)=>{
    userStoryObject.getAllUserStories().then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});

userStoryRoutes.get("/:id",(req,res)=>{
     let id = req.params.id;
    userStoryObject.getSingleUserStory(id).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
});
});

userStoryRoutes.post("/",(req,res)=>{
    let userStory  = req.body;
    userStoryObject.insertUserStory(userStory).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});


userStoryRoutes.put("/",(req,res)=>{
    let userStory  = req.body;
    userStoryObject.updateUserStory(userStory).then((docs)=> {
        res.write(docs);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
});


userStoryRoutes.delete("/",(req,res)=>{
    let userStory  = req.body;
    let id =  userStory._id;
    userStoryObject.deleteUserStory(id).then((data)=> {
        res.write(data);
        res.end();
    }, (err)=> {
    console.log('The promise was rejected', err, err.stack);
    });
}); 

module.exports = userStoryRoutes;
