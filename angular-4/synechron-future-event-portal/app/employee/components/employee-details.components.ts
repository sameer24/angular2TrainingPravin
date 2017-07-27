import { Component,Input } from "@angular/core";

import { Employee } from "../models/employee";


@Component({
    selector:'employee-detail',
    templateUrl:'app/employee/views/employee-details.component.html',
    styleUrls:['app/employee/css/employee.styles.css']
})

export class EmployeeDetailsComponent{
    title:'Employee Details';
    constructor(){
         //this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/node.png',10)
    }
    @Input() employee: Employee;
}