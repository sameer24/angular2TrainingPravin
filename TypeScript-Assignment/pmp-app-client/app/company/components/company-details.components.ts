import { Component,Input,OnChanges } from "@angular/core";

import { Employee } from "../models/employee";


@Component({
    selector:'employee-detail',
    templateUrl:'app/employee/views/employee-details.component.html',
    styleUrls:['app/employee/css/employee.styles.css']
})

export class EmployeeDetailsComponent implements OnChanges{
    title:'Employee Details';
    showDetail:boolean
    constructor(){
         //this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/node.png',10)         
          this.showDetail=true;
    }
    ngOnChanges():void{
         this.showDetail=true;
    }
    
    @Input() employee: Employee;
}