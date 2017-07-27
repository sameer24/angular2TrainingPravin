export class Supplier {
    constructor() {
        this.supplierID;
        this.supplierName;
        this.supplierAddress;
        this.supplierContactNo;
        this.supplierEmail;
    }
    printSupplierDetails() {
        console.log(`Supplier Details : Supplier ID ${this.supplierID} 
    Supplier Name ${this.supplierName}  Supplier Address 
    ${this.supplierAddress} Supplier ContactNo ${this.supplierContactNo} 
    Supplier email ${this.supplierEmail} `);
    }
}