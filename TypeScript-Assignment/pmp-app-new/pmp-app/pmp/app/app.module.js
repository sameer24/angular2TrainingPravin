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
var app_component_1 = require("./app.component");
var employee_module_1 = require("./employee/employee.module");
var company_module_1 = require("./company/company.module");
var project_module_1 = require("./project/project.module");
var userstory_module_1 = require("./userstory/userstory.module");
var task_module_1 = require("./task/task.module");
var bug_module_1 = require("./bug/bug.module");
var home_module_1 = require("./home/home.module");
var header_component_1 = require("./navigation/components/header.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            employee_module_1.EmployeeModule,
            project_module_1.ProjectModule,
            company_module_1.CompanyModule,
            userstory_module_1.UserstoryModule,
            task_module_1.TaskModule,
            bug_module_1.BugModule,
            home_module_1.HomeModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent, header_component_1.HeaderComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        exports: [],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map