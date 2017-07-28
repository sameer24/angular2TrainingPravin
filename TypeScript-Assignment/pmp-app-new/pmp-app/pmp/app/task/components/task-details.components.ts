import { Component, Input,OnInit } from "@angular/core";
import { Task } from "../models/Task";
import { TaskService } from "../services/task-service"
import { ActivatedRoute, Params } from "@angular/router"

@Component({
    selector: 'task-details',
    templateUrl: 'app/task/views/task-details.component.html',
     styleUrls:['app/task/css/task.styles.css']
})

export class TaskDetailsComponent  implements OnInit{
    constructor(private _service: TaskService,private _route:ActivatedRoute) {      
    }
    title: string = "Task Details";
    @Input() id: string;
    task:Task;
     ngOnInit() {
         let id: string;
        this._route.params.subscribe(
            params => id = params["id"]
        );

        this._service.getSingle(id).subscribe(
            data => this.task = data
        )
    } 
}