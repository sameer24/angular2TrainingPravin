var express = require('express');
var mongojs=require('mongojs')
var db=mongojs('authdb',['users']);

var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');


var jwt = require('jsonwebtoken'); 
var config = require('./config');

var port = process.env.PORT || 9080;

app.set('synSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//morgan logger
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('Synechron JWT token example!');
});

var apiRoutes = express.Router();

apiRoutes.post('/synauth', function (req, res) {
    db.users.findOne({
        name: req.body.name
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.json({ success: false, message: 'Access Denied! Please check user name!' });
        } else if (user) {

            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Access Denied! Please check password!' });
            } else {

                var token = jwt.sign(user, app.get('synSecret'), {
                    expiresIn: 2000
                });
                res.json({
                    success: true,
                    message: 'Save this token for next requests',
                    token: token
                });
            }
        }
    });
});

apiRoutes.use(function (req, res, next) {
    console.log(req.query.token);
    var token = req.body.token || req.query.token || req.headers['x-synechron-token'];

    if (token) {
        jwt.verify(token, app.get('synSecret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'We are not able to verify the token!' });
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        return res.status(403).send({
            success: false,
            message: 'Please provide the token for verification!'
        });

    }
});

apiRoutes.get('/', function (req, res) {
    res.json({ message: 'Synechron Pvt. Ltd. Pune Division' });
});

apiRoutes.get('/users', function (req, res) {
    db.users.find({}, function (err, users) {
        res.json(users);
    });
});

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log('Server is listening on PORT : ' + port);
});