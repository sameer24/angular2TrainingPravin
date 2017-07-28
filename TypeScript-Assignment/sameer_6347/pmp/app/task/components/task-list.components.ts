
import { Component, OnInit } from "@angular/core";
import { Task } from "../models/task";
import { TaskService } from "../services/task-service"

@Component({
    selector: 'task-list',
    templateUrl: 'app/task/views/task-list.component.html',
    styleUrls: ['app/task/css/task.styles.css']
})

export class TaskListComponents implements OnInit {
    title: string = "Task List";
    task: Task;
    searchLetterContains: string = "";
    tasks: Task[];
    ngOnInit() {
        this._service.getAll().subscribe(
            data => this.tasks = data
        )
    }
    delete(id: string) {
        this._service.deleteRecord(id).subscribe(
            data => {
                console.log("Deleted");
                this._service.getAll().subscribe(
                    data => this.tasks = data
                )
            }
        )
    }
    constructor(private _service: TaskService) {
    }
}