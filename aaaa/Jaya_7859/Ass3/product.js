export class Product {
    constructor() {
        this.productID;
        this.productName;
        this.productAmount;
        this.productExpiryDate;
        this.productTotalQuantity;

        this.supplierId;
        this.categoryId;
    }

    //Print Product Details
    printProductDetails() {
        console.log(`Product Details : Product ID ${this.Product.productID} Product Name
     ${this.Product.productName} Product Amount ${this.Product.productAmount}
     Product ExpiryDate ${this.Product.productExpiryDate}
     Product Total Quantity ${this.Product.productTotalQuantity} 
     Supplier ID ${this.supplierId} Category ID ${this.categoryId}`);
    }

    asyPrintProductDetails() {
        console.log('Inside async function');

        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.printProductDetails();
                resolve();
            }, 1000);

        });
        return promise;
    }
}