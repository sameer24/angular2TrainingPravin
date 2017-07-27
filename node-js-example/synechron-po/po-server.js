const http = require('http');
const fs = require('fs');
const url = require('url');

let customerObj = require('./webapi/customers.api');
let categoriesObj = require('./webapi/categories.api');
let productsObj = require('./webapi/products.api');
let suppliersObj = require('./webapi/suppliers.api');
let ordersObj = require('./webapi/orders.api')

let showFile = require('./showfile')

let server = http.createServer((request, response) => {
    console.log('Request Received !');
    response.writeHead(200, { 'content-type': 'text/html' });

    switch (request.method) {
        case 'GET':
            if (request.url == '/home') {
                showFile.displayFileContent(request, response, __dirname + "/public/home.html");
            } else if (request.url == '/customers') {
                showFile.displayFileContent(request, response, __dirname + "/public/customers.html");
            } else if (request.url == '/api/customers') {
                response.writeHead(200, { "content-type": "application/json" });
                customerObj.getAllCustomersP()
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
            }else if (request.url == '/categories') {
                showFile.displayFileContent(request, response, __dirname + "/public/categories.html");
            } else if (request.url == '/api/categories') {
                response.writeHead(200, { "content-type": "application/json" });
                productsObj.getAllProductsP()
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
            }else if (request.url == '/products') {
                showFile.displayFileContent(request, response, __dirname + "/public/products.html");
            } else if (request.url == '/api/products') {
                response.writeHead(200, { "content-type": "application/json" });
                productsObj.getAllProductsP()
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
            }else if (request.url == '/suppliers') {
                showFile.displayFileContent(request, response, __dirname + "/public/suppliers.html");
            } else if (request.url == '/api/suppliers') {
                response.writeHead(200, { "content-type": "application/json" });
                suppliersObj.getAllSuppliersP()
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
            }else if (request.url == '/orders') {
                showFile.displayFileContent(request, response, __dirname + "/public/orders.html");
            } else if (request.url == '/api/orders') {
                response.writeHead(200, { "content-type": "application/json" });
                ordersObj.getAllOrdersP()
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
            } 
            else {
                let query = url.parse(request.url, true).query;
                //customerObj.getSingleCustomers(request, response, query.id);
                response.writeHead(200, { "content-type": "application/json" });
                customerObj.getSingleCustomersP(query.id)
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
            }
            break;
        case 'POST':
            let body = [];
            if (request.url == '/api/customers') {
                request.on('data', (chunk) => {
                    body.push(chunk);
                    //console.log(Buffer.concat(body).toString())
                    //customerObj.insertCustomers(request, response, JSON.parse(Buffer.concat(body).toString()))
                    customerObj.insertCustomersP(JSON.parse(Buffer.concat(body).toString()))
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
                })
            }else if (request.url == '/api/categories') {
                request.on('data', (chunk) => {
                    body.push(chunk);
                    categoriesObj.insertCategoriesP(JSON.parse(Buffer.concat(body).toString()))
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
                })
            }else if (request.url == '/api/products') {
                request.on('data', (chunk) => {
                    body.push(chunk);
                    productsObj.insertProductsP(JSON.parse(Buffer.concat(body).toString()))
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
                })
            }else if (request.url == '/api/suppliers') {
                request.on('data', (chunk) => {
                    body.push(chunk);
                    suppliersObj.insertSuppliersP(JSON.parse(Buffer.concat(body).toString()))
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
                })
            }else if (request.url == '/api/orders') {
                request.on('data', (chunk) => {
                    body.push(chunk);
                    ordersObj.insertOrdersP(JSON.parse(Buffer.concat(body).toString()))
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
                })
            }
            break;
        case 'PUT':
            let updateBody = [];
            if (request.url == '/api/customers') {
                request.on('data', (chunk) => {
                    updateBody.push(chunk);
                    console.log(Buffer.concat(updateBody).toString())
                    //customerObj.updateCustomers(request, response, JSON.parse(Buffer.concat(updateBody).toString()))
                    customerObj.updateCustomersP(JSON.parse(Buffer.concat(updateBody).toString()))
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
                })
            }else if (request.url == '/api/categories') {
                request.on('data', (chunk) => {
                    updateBody.push(chunk);
                    console.log(Buffer.concat(updateBody).toString())
                    //customerObj.updateCustomers(request, response, JSON.parse(Buffer.concat(updateBody).toString()))
                    categoriesObj.updateCategoriesP(JSON.parse(Buffer.concat(updateBody).toString()))
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
                })
            }else if (request.url == '/api/products') {
                request.on('data', (chunk) => {
                    updateBody.push(chunk);
                    console.log(Buffer.concat(updateBody).toString())
                    //customerObj.updateCustomers(request, response, JSON.parse(Buffer.concat(updateBody).toString()))
                    productsObj.updateProductsP(JSON.parse(Buffer.concat(updateBody).toString()))
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
                })
            }else if (request.url == '/api/suppliers') {
                request.on('data', (chunk) => {
                    updateBody.push(chunk);
                    console.log(Buffer.concat(updateBody).toString())
                    //customerObj.updateCustomers(request, response, JSON.parse(Buffer.concat(updateBody).toString()))
                    suppliersObj.updateSuppliersP(JSON.parse(Buffer.concat(updateBody).toString()))
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
                })
            }else if (request.url == '/api/orders') {
                request.on('data', (chunk) => {
                    updateBody.push(chunk);
                    console.log(Buffer.concat(updateBody).toString())
                    //customerObj.updateCustomers(request, response, JSON.parse(Buffer.concat(updateBody).toString()))
                    ordersObj.updateOrdersP(JSON.parse(Buffer.concat(updateBody).toString()))
                    .then((data) => {
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                    .catch(error => console.log(error));
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