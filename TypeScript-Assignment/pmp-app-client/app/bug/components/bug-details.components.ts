import { Component,Input,OnChanges } from "@angular/core";

import { Bug } from "../models/bug";


@Component({
    selector:'bug-detail',
    templateUrl:'app/bug/views/bug-details.component.html',
    styleUrls:['app/bug/css/bug.styles.css']
})

export class EmployeeDetailsComponent implements OnChanges{
    title:'bug Details';
    showDetail:boolean
    constructor(){
         //this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/node.png',10)         
          this.showDetail=true;
    }
    ngOnChanges():void{
         this.showDetail=true;
    }
    
    @Input() bug: Bug;
}