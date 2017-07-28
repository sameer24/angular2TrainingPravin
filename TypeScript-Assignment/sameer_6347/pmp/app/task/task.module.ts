import { NgModule } from "@angular/core";
import { TaskListComponents } from "./components/task-list.components";
import { TaskDetailsComponent } from "./components/task-details.components";
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TaskService } from "./services/task-service";
import { RouterModule } from "@angular/router"

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [TaskDetailsComponent, TaskListComponents],
    bootstrap: [],
    exports: [TaskListComponents],
    providers: [TaskService]
})


export class TaskModule {

}