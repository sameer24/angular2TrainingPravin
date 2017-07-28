import { Component } from "@angular/core";

import { Task } from "../models/task";
import { TaskService } from "../services/task.service";

@Component({
    selector:'task-list',
    templateUrl:'app/task/views/task-list.component.html'
})

export class TaskListComponent{
    title:string = 'task List 1';
    subTitle:string = 'Published by 1 Synechron';
    selectedTask: Task;
    showTask(emp:Task):void{
        this.selectedTask = emp;
    }
    hideDetail():void{
        this.selectedTask = '';
    }
    constructor(private _TaskService:TaskService){
      //  this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/photo.png',10)
      this._TaskService.getAllTask().subscribe(
          data=>{
                console.log(data);
                this.tasks=data
            },
            err=>console.log(err),()=>{console.log('completed')});
    }
   
    tasks: Task[];
}