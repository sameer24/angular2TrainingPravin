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
var events_list_component_1 = require("./events/components/events-list.component");
var events_details_component_1 = require("./events/components/events-details.component");
var employee_list_component_1 = require("./employee/components/employee-list.component");
var employee_details_components_1 = require("./employee/components/employee-details.components");
var parent_component_1 = require("./parent-child-communication/compononents/parent.component");
var child_component_1 = require("./parent-child-communication/compononents/child.component");
var jph_posts_components_1 = require("./jsonplaceholder/components/jph-posts.components");
var jph_users_components_1 = require("./jsonplaceholder/components/jph-users.components");
//Pipes
var first_letter_capital_pipe_1 = require("./events/pipes/first-letter-capital.pipe");
var filter_by_pipe_1 = require("./events/pipes/filter-by.pipe");
var start_with_pipe_1 = require("./events/pipes/start-with.pipe");
var ends_with_pipe_1 = require("./events/pipes/ends-with.pipe");
var date_with_pipe_1 = require("./events/pipes/date-with.pipe");
//Services
var events_service_1 = require("./events/services/events.service");
var jph_posts_service_1 = require("./jsonplaceholder/services/jph.posts.service");
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
        declarations: [app_component_1.AppComponent, events_list_component_1.EventsListComponent, employee_list_component_1.EmployeeListComponent, events_details_component_1.EventsDetailsComponent,
            employee_details_components_1.EmployeeDetailsComponent, parent_component_1.ParentComponent, child_component_1.ChildComponent, first_letter_capital_pipe_1.FirstLetterCapitalPipe, filter_by_pipe_1.FilterByPipe,
            start_with_pipe_1.StartsWith, ends_with_pipe_1.EndsWith, date_with_pipe_1.DateStartsWith, jph_posts_components_1.JphPostComponent, jph_users_components_1.JphUserComponent],
        providers: [common_1.DatePipe, events_service_1.EventsService, jph_posts_service_1.JphPostsService, employee_service_1.EmployeeService],
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