export class Category {
    constructor() {
        this.categoryID;
        this.categoryType;
        this.description;
        this.size;
        this.color;       
    }

    //Print Category Details
    printCategotyDetails() {
        console.log(`Category Details : Category Details ${this.categoryID} Category Type
         Categoty Type ${this.categoryType} Description ${this.description}
         Size ${this.size} Color ${this.color}`);
    }

     asyPrintCategory() {
        console.log('Inside async function');

        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.printCategotyDetails();
                resolve();
            }, 1000);

        });
        return promise;
    }
}