import { Component,Input,OnChanges } from "@angular/core";

import { Project } from "../models/project";


@Component({
    selector:'project-detail',
    templateUrl:'app/project/views/project-details.component.html',
    styleUrls:['app/project/css/project.styles.css']
})

export class ProjectDetailsComponent implements OnChanges{
    title:'project Details';
    showDetail:boolean
    constructor(){
         //this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/node.png',10)         
          this.showDetail=true;
    }
    ngOnChanges():void{
         this.showDetail=true;
    }
    
    @Input() Project: Project;
}