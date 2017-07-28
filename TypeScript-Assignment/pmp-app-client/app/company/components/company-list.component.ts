import { Component } from "@angular/core";

import { Company } from "../models/company";
import { CompanyService } from "../services/company.service";

@Component({
    selector:'company-list',
    templateUrl:'app/company/views/company-list.component.html'
})

export class EmployeeListComponent{
    title:string = 'CompanyService List 1';
    subTitle:string = 'Published by 1 Synechron';
    selectedEmployee: Company;
    showEmployee(emp:Company):void{
        this.selectedEmployee = emp;
    }
    hideDetail():void{
        this.selectedEmployee = '';
    }
    constructor(private CompanyService:CompanyService){
      //  this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/photo.png',10)
      this.CompanyService.getAllCompany().subscribe(
          data=>{
                console.log(data);
                this.employees=data
            },
            err=>console.log(err),()=>{console.log('completed')});
    }
   
    employees: Company[];
}