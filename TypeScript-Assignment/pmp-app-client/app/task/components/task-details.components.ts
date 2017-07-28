import { Component,Input,OnChanges } from "@angular/core";

import { Task } from "../models/task";

@Component({
    selector:'task-detail',
    templateUrl:'app/task/views/task-details.component.html',
    styleUrls:['app/task/css/task.styles.css']
})

export class TaskDetailsComponent implements OnChanges{
    title:'task Details';
    showDetail:boolean
    constructor(){
         //this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/node.png',10)         
          this.showDetail=true;
    }
    ngOnChanges():void{
         this.showDetail=true;
    }
    
    @Input() task: Task;
}