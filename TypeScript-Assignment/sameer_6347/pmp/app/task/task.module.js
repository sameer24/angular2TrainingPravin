"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_list_components_1 = require("./components/task-list.components");
var task_details_components_1 = require("./components/task-details.components");
var common_1 = require("@angular/common");
var task_service_1 = require("./services/task-service");
var router_1 = require("@angular/router");
var TaskModule = (function () {
    function TaskModule() {
    }
    return TaskModule;
}());
TaskModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        declarations: [task_details_components_1.TaskDetailsComponent, task_list_components_1.TaskListComponents],
        bootstrap: [],
        exports: [task_list_components_1.TaskListComponents],
        providers: [task_service_1.TaskService]
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=task.module.js.map