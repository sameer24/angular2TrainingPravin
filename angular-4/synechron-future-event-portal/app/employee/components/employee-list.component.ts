import { Component } from "@angular/core";

import { Employee } from "../models/employee";

@Component({
    selector:'employee-list',
    templateUrl:'app/employee/views/employee-list.component.html'
})

export class EmployeeListComponent{
    title:string = 'Employee List';
    subTitle:string = 'Published by Synechron';
    selectedEmployee: Employee;
    showEmployee(emp:Employee):void{
        this.selectedEmployee = emp;
    }
    constructor(){
      //  this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/photo.png',10)
    }
   
    employees: Employee[]=[
        {
            employeeID:1,
            employeeFName:'Sameer',
            eventLName:'Kelkar ', 
            jobDescription:'Job Desc',
            address:'Address',
            phone:'123456789', 
            birthDate:new Date(),
            joiningDate:new Date(),
            bankAccountNumber:100, 
            pfNumber:50, 
            photo:'images/node.png',
            rating:10
        },
        {
            employeeID:2,
            employeeFName:'Santosh',
            eventLName:'Joshi', 
            jobDescription:'Job Desc - 3',
            address:'Address',
            phone:'123456789', 
            birthDate:new Date(),
            joiningDate:new Date(),
            bankAccountNumber:100, 
            pfNumber:50, 
            photo:'images/jquery.png',
            rating:10
        }
    ]
}