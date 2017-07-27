const http = require('http');
const fs = require('fs');
const url = require('url');

let customerObj = require('./webapi/customers.api');

let server = http.createServer((request, response) => {
    console.log('Request Received !');
    response.writeHead(200, { 'content-type': 'text/html' });

    switch (request.method) {
        case 'GET':
            if (request.url == '/home') {
                fs.readFile(__dirname + "/public/home.html", (err, data) => {
                    if (err) {
                        response.write('Error aali aahe re bho');
                        response.end();
                    }
                    response.write(data);
                    response.end();
                })
            } else if (request.url == '/customers') {
                fs.readFile(__dirname + "/public/customers.html", (err, data) => {
                    if (err) {
                        response.write('Error aali aahe re bho');
                        response.end();
                    }
                    response.write(data);
                    response.end();
                })
            } else if (request.url == '/api/customers') {
                customerObj.getAllCustomers(request, response);
            } else {
                let query = url.parse(request.url, true).query;
                customerObj.getSingleCustomers(request, response, query.id);
            }
            break;
        case 'POST':
            let body = [];
            if (request.url == '/api/customers') {
                request.on('data', (chunk) => {
                    body.push(chunk);
                    //console.log(Buffer.concat(body).toString())
                    customerObj.insertCustomers(request, response, JSON.parse(Buffer.concat(body).toString()))
                })
            }
            break;
        case 'PUT':
            let updateBody = [];
            if (request.url == '/api/customers') {
                request.on('data', (chunk) => {
                    updateBody.push(chunk);
                    //console.log(Buffer.concat(body).toString())
                    customerObj.updateCustomers(request, response, JSON.parse(Buffer.concat(updateBody).toString()))
                })
            }
            break;
        case 'DELETE':
            console.log(url.parse(request.url, true).query.id);
            customerObj.deleteCustomers(request, response, url.parse(request.url, true).query.id);
            break;
        default:
            break;
    }
});

server.listen(7000, (err) => {
    if (err) {
        console.log('Error with Server Start ' + err);
        return;
    }
    console.log('SynechronPO server running on port');
})