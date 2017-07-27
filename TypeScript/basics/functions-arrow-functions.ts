function printMessage1(): void {
    console.log('Welcome to Synechron Pune')
}

function printMessage2(cityName: string): void {
    console.log('Welcome to Synechron Pune' + cityName)
}

let products:any[]=[
    {"id":1,"Name":"iPhone","companyName":"Apple","stock":45},
    {"id":2,"Name":"iPhone2","companyName":"Apple","stock":453},
    {"id":3,"Name":"iPhone3","companyName":"Apple","stock":34},
    {"id":4,"Name":"iPhone4","companyName":"Apple","stock":15}
];

function getAllProducts(companyName:string):string[];
function getAllProducts(stock:number):string[];
function getAllProducts(propertyName):string[]{
    let allProducts = products;
    let availableProduct:string[] = [];
    if(typeof propertyName=='string'){
        for(let product of allProducts){
            if(product.companyName == propertyName){
                availableProduct.push(product.Name);
            }
        }
    }
    else if(typeof propertyName=='number'){
        for(let product of allProducts){
            if(product.stock == propertyName){
                availableProduct.push(product.Name);
            }
        }
    }
    return availableProduct;
}

for(let productName of getAllProducts('Apple')){
    console.log(productName)
}
for(let productName of getAllProducts(15)){
    console.log(productName)
}


printMessage1();
printMessage2('Pune');

function addition(nm1: number, nm2: number): number {
    return nm1 + nm2
}

console.log(addition(10, 20));

function salesNetProfitIndia(cogs: number, expense: number, actualSale: number, gst: number = 18): number {
    let gstAmount = actualSale * gst / 100;
    return actualSale - (cogs + expense + gstAmount);
}

console.log(salesNetProfitIndia(12000, 13000, 150000));

function salesNetProfitDubai(cogs: number, expense: number, actualSale: number, gst?: number): number {
    if (!gst) {
        return actualSale - (cogs + expense);
    } else {
        let gstAmount = actualSale * gst / 100;
        return actualSale - (cogs + expense + gstAmount);
    }
}

console.log(salesNetProfitDubai(10,20,150));
console.log(salesNetProfitDubai(10,20,150,10));

let printSynechronHRMessage1 = ()=>{console.log('Good Evening Synechron')}
printSynechronHRMessage1();
let printSynechronHRMessage2 = ()=>{console.log('Good Afternoon Synechron')}
printSynechronHRMessage1();

let printSynechronHRMessage3 = ()=>{console.log('Return Good Afternoon Synechron')}
printSynechronHRMessage1();