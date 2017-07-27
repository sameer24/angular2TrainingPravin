// console.log('This file holds main module which will load all the depending module')

// import { Person } from "./classes/person";
// import { IndiaSales } from "./classes/india-sales";

// let person: Person = new Person();
// person.socialID = 123456
// person.personName = 'Sameer'
// person.address = 'Abc Pune'
// person.city = 'Pune'
// person.contactNo = '123456789999'
// person.emailID = 'a@a.com'
// person.country = 'India';

// person.printPersonInformation();

// let sales: IndiaSales = new IndiaSales();

// console.log(sales.salesNetProfit(12,13,150));

    // import { IGenericRepository } from "./classes/igeneric-repository";
    // import {GenericRepository} from "./classes/generic-repository";
    // import {Product, Customer} from "./classes/product";

    // let product:IGenericRepository<Product>=new GenericRepository<Product>();

    // product.addNew(new Product(1,'iPhone','Apple'));
    // product.addNew(new Product(2,'iPhone2','Apple 2'));
    // product.addNew(new Product(3,'iPhone3','Apple 3'));
    // product.addNew(new Product(4,'iPhone4','Apple 4'));

    // for (let prod of product.getAll()){
    //     console.log(`Product ID is ${prod.productID} name is ${prod.productName}`)
    // }

    // console.log('Get Single Value')
    // console.log(product.getSingle(1));

    // console.log('Update A Product')
    // product.update(new Product(4,'iPhone4','Apple 4'));

    // console.log('Delete A Product')
    // product.delete(new Product(4,'iPhone4','Apple 4'));



    // let customer:IGenericRepository<Customer>=new GenericRepository<Customer>();

    // customer.addNew(new Customer(1,'iPhone','Apple'));
    // customer.addNew(new Customer(2,'iPhone2','Apple 2'));
    // customer.addNew(new Customer(3,'iPhone3','Apple 3'));
    // customer.addNew(new Customer(4,'iPhone4','Apple 4'));

    // for (let cust of customer.getAll()){
    //     console.log(`Customer ID is ${cust.customerID} name is ${cust.customerName}`)
    // }

    // console.log('Get Single Value')
    // console.log(customer.getSingle(1));

    // console.log('Update A Customer')
    // customer.update(new Customer(4,'iPhone4','Apple 4'));

    // console.log('Delete A Customer')
    // customer.delete(new Customer(4,'iPhone4','Apple 4'));

import { IPerson } from "./classes/iperson";
import { SynechronGenericRepository } from "./classes/generic-repository-with-constraint";
import { Employee } from "./classes/employee";

let employee:SynechronGenericRepository<Employee> = new SynechronGenericRepository<Employee>();

employee.addNew(new Employee(1,'Sameer','Sameer','Pune'))
employee.addNew(new Employee(2,'Sameer 1','Sameer 1','Pune 1'))
employee.addNew(new Employee(3,'Sameer 2','Sameer2','Pune 2'))

console.log(employee);

for(let emp of employee.getAll()){
    console.log(emp)
}