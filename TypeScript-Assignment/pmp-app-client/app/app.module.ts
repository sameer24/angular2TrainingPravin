import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';

//Components import
import { AppComponent } from "./app.component";
import { TaskListComponent } from "./task/components/task-list.component";
import { TaskDetailsComponent } from "./task/components/task-details.components";

import { EmployeeListComponent } from "./employee/components/employee-list.component";
import { EmployeeDetailsComponent } from "./employee/components/employee-details.components";
// import { ParentComponent } from "./parent-child-communication/compononents/parent.component";
// import { ChildComponent } from "./parent-child-communication/compononents/child.component";
// import { JphPostComponent } from "./jsonplaceholder/components/jph-posts.components";
// import { JphUserComponent } from "./jsonplaceholder/components/jph-users.components";

//Pipes
// import { FirstLetterCapitalPipe } from "./events/pipes/first-letter-capital.pipe";
// import { FilterByPipe } from "./events/pipes/filter-by.pipe";
// import { StartsWith } from "./events/pipes/start-with.pipe";
// import { EndsWith } from "./events/pipes/ends-with.pipe";
// import { DateStartsWith } from "./events/pipes/date-with.pipe";

//Services
import { TaskService } from "./task/services/task.service";
//import { JphPostsService } from "./jsonplaceholder/services/jph.posts.service";
import { EmployeeService } from "./employee/services/employee.service";

//Decorator
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, TaskDetailsComponent, EmployeeListComponent, TaskListComponent,
        EmployeeDetailsComponent, ],
    providers: [DatePipe, TaskService,EmployeeService],
    bootstrap: [AppComponent],
    exports: []
})
/**
 * imports : List of module which want to import from Angular and Custom
 * declarations : Third party component
 * providers : Services (this will be singlton and injectable)
 * bootstrap : root component name
 * exports : services or methods to export outside this module
 */
export class AppModule {

}