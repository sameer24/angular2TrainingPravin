const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
let app = express(); 
app.use(cors())

let employeesRoutes = require('./employees-routing'); 
let companiesRoutes = require('./companies-routing'); 
let porjectsRoutes = require('./projects-routing'); 
let userStoriesRoutes = require('./user-stories-routing');
let tasksRoutes = require('./tasks-routing');
let bugsRoutes = require('./bugs-routing');

/*app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8005');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
*/

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());


app.use('/employees',employeesRoutes); 
app.use('/companies',companiesRoutes);
app.use('/projects',porjectsRoutes);
app.use('/userstories',userStoriesRoutes); 
app.use('/tasks',tasksRoutes);
app.use('/bugs',bugsRoutes);



app.listen(8005,(err)=>{
    if(err){
        console.log("ERROR during starting of the server!");    
    }
    console.log("Server running on Port: 8005");
}); 