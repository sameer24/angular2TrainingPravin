function printMessage1() {
    console.log('Welcome to Synechron Pune');
}
function printMessage2(cityName) {
    console.log('Welcome to Synechron Pune' + cityName);
}
var products = [
    { "id": 1, "Name": "iPhone", "companyName": "Apple", "stock": 45 },
    { "id": 2, "Name": "iPhone2", "companyName": "Apple", "stock": 453 },
    { "id": 3, "Name": "iPhone3", "companyName": "Apple", "stock": 34 },
    { "id": 4, "Name": "iPhone4", "companyName": "Apple", "stock": 15 }
];
function getAllProducts(propertyName) {
    var allProducts = products;
    var availableProduct = [];
    if (typeof propertyName == 'string') {
        for (var _i = 0, allProducts_1 = allProducts; _i < allProducts_1.length; _i++) {
            var product = allProducts_1[_i];
            if (product.companyName == propertyName) {
                availableProduct.push(product.Name);
            }
        }
    }
    else if (typeof propertyName == 'number') {
        for (var _a = 0, allProducts_2 = allProducts; _a < allProducts_2.length; _a++) {
            var product = allProducts_2[_a];
            if (product.stock == propertyName) {
                availableProduct.push(product.Name);
            }
        }
    }
    return availableProduct;
}
for (var _i = 0, _a = getAllProducts('Apple'); _i < _a.length; _i++) {
    var productName = _a[_i];
    console.log(productName);
}
for (var _b = 0, _c = getAllProducts(15); _b < _c.length; _b++) {
    var productName = _c[_b];
    console.log(productName);
}
printMessage1();
printMessage2('Pune');
function addition(nm1, nm2) {
    return nm1 + nm2;
}
console.log(addition(10, 20));
function salesNetProfitIndia(cogs, expense, actualSale, gst) {
    if (gst === void 0) { gst = 18; }
    var gstAmount = actualSale * gst / 100;
    return actualSale - (cogs + expense + gstAmount);
}
console.log(salesNetProfitIndia(12000, 13000, 150000));
function salesNetProfitDubai(cogs, expense, actualSale, gst) {
    if (!gst) {
        return actualSale - (cogs + expense);
    }
    else {
        var gstAmount = actualSale * gst / 100;
        return actualSale - (cogs + expense + gstAmount);
    }
}
console.log(salesNetProfitDubai(10, 20, 150));
console.log(salesNetProfitDubai(10, 20, 150, 10));
var printSynechronHRMessage1 = function () { console.log('Good Evening Synechron'); };
printSynechronHRMessage1();
var printSynechronHRMessage2 = function () { console.log('Good Afternoon Synechron'); };
printSynechronHRMessage1();
var printSynechronHRMessage3 = function () { console.log('Return Good Afternoon Synechron'); };
printSynechronHRMessage1();
