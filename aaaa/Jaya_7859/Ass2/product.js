export class Product {
    constructor(suppId,catId) {
        this.productID;
        this.productName;
        this.productAmount;
        this.productExpiryDate;
        this.productTotalQuantity;

        this.supplierId = suppId;
        this.categoryId=catId;
    }

    //Print Product Details
    printProductDetails() {
        console.log(`Product Details : Product ID ${this.Product.productID} Product Name
     ${this.Product.productName} Product Amount ${this.Product.productAmount}
     Product ExpiryDate ${this.Product.productExpiryDate}
     Product Total Quantity ${this.Product.productTotalQuantity} 
     Supplier ID ${this.supplierId} Category ID ${this.categoryId}`);
    }
}