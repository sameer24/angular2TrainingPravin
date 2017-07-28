const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

let  companyRoute = require('./company-routing');
let  projectRoute = require('./project-routing');
let  employeeRoute = require('./employee-routing');
let  userStoryRoute = require('./userstory-routing');
let  taskRoute = require('./task-routing')
let  bugRoute = require('./bug-routing')


let app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/company',companyRoute);
app.use('/api/project',projectRoute);
app.use('/api/employee',employeeRoute);
app.use('/api/userstory',userStoryRoute);
app.use('/api/task',taskRoute);
app.use('/api/bug',bugRoute);
 app.use(function(req, res){
       res.send(404);
   });

///Start Server
app.listen(8001, (err) => {
    if (err) {
        console.log('Error during  starting of server !' + err);
    }
    console.log('Server is Running on PORT:8001');
});

 
  
