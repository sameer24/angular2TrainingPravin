import { Component,Input,OnChanges } from "@angular/core";

import { Company } from "../models/company";


@Component({
    selector:'company-detail',
    templateUrl:'app/company/views/company-details.component.html',
    styleUrls:['app/company/css/company.styles.css']
})

export class CompanyDetailsComponent implements OnChanges{
    title:'company Details';
    showDetail:boolean
    constructor(){
         //this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/node.png',10)         
          this.showDetail=true;
    }
    ngOnChanges():void{
         this.showDetail=true;
    }
    
    @Input() company: Company;
}