export class Employee {
    constructor() {
        this.employeeID;
        this.employeeName;
        this.employeeContactNo;
        this.address;
        this.email;
    }

    //print Employee details
    printEmployeeDetails() {
        console.log(`Employee Details : Employee ID ${this.employeeID} 
    Employee Name ${this.employeeName} ContactNo ${this.employeeContactNo} 
    Address ${this.address} Email ${this.email} `);
}

    asyPrintEmployee() {
        console.log('Inside async function');

        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.printEmployeeDetails();
                resolve();
            }, 1000);

        });
        return promise;
    }

}