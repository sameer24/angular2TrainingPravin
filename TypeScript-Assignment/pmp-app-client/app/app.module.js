"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
//Components import
var app_component_1 = require("./app.component");
var task_list_component_1 = require("./task/components/task-list.component");
var task_details_components_1 = require("./task/components/task-details.components");
var employee_list_component_1 = require("./employee/components/employee-list.component");
var employee_details_components_1 = require("./employee/components/employee-details.components");
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
var task_service_1 = require("./task/services/task.service");
//import { JphPostsService } from "./jsonplaceholder/services/jph.posts.service";
var employee_service_1 = require("./employee/services/employee.service");
//Decorator
var AppModule = (function () {
    /**
     * imports : List of module which want to import from Angular and Custom
     * declarations : Third party component
     * providers : Services (this will be singlton and injectable)
     * bootstrap : root component name
     * exports : services or methods to export outside this module
     */
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, task_details_components_1.TaskDetailsComponent, employee_list_component_1.EmployeeListComponent, task_list_component_1.TaskListComponent,
            employee_details_components_1.EmployeeDetailsComponent,],
        providers: [common_1.DatePipe, task_service_1.TaskService, employee_service_1.EmployeeService],
        bootstrap: [app_component_1.AppComponent],
        exports: []
    })
    /**
     * imports : List of module which want to import from Angular and Custom
     * declarations : Third party component
     * providers : Services (this will be singlton and injectable)
     * bootstrap : root component name
     * exports : services or methods to export outside this module
     */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map