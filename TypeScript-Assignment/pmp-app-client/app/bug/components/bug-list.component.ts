import { Component } from "@angular/core";

import { Bug } from "../models/bug";
import { BugService } from "../services/bug.service";

@Component({
    selector:'bug-list',
    templateUrl:'app/employee/views/bug-list.component.html'
})

export class BugListComponent{
    title:string = 'BugService List 1';
    subTitle:string = 'Published by 1 Synechron';
    selectedEmployee: Bug;
    showEmployee(emp:Bug):void{
        this.selectedEmployee = emp;
    }
    hideDetail():void{
        this.selectedEmployee = '';
    }
    constructor(private _EmployeeService:BugService){
      //  this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/photo.png',10)
      this._EmployeeService.getAllBug().subscribe(
          data=>{
                console.log(data);
                this.bug=data
            },
            err=>console.log(err),()=>{console.log('completed')});
    }
   
    bug: Bug[];
}