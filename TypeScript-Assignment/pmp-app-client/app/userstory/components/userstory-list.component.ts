import { Component } from "@angular/core";

import { Employee } from "../models/employee";
import { EmployeeService } from "../services/employee.service";

@Component({
    selector:'employee-list',
    templateUrl:'app/employee/views/employee-list.component.html'
})

export class EmployeeListComponent{
    title:string = 'Employee List 1';
    subTitle:string = 'Published by 1 Synechron';
    selectedEmployee: Employee;
    showEmployee(emp:Employee):void{
        this.selectedEmployee = emp;
    }
    hideDetail():void{
        this.selectedEmployee = '';
    }
    constructor(private _EmployeeService:EmployeeService){
      //  this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/photo.png',10)
      this._EmployeeService.getAllEmployee().subscribe(
          data=>{
                console.log(data);
                this.employees=data
            },
            err=>console.log(err),()=>{console.log('completed')});
    }
   
    employees: Employee[];
}