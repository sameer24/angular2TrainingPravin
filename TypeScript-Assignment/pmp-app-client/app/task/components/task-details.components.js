"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_1 = require("../models/task");
var TaskDetailsComponent = (function () {
    function TaskDetailsComponent() {
        //this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/node.png',10)         
        this.showDetail = true;
    }
    TaskDetailsComponent.prototype.ngOnChanges = function () {
        this.showDetail = true;
    };
    return TaskDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", task_1.Task)
], TaskDetailsComponent.prototype, "task", void 0);
TaskDetailsComponent = __decorate([
    core_1.Component({
        selector: 'task-detail',
        templateUrl: 'app/task/views/task-details.component.html',
        styleUrls: ['app/task/css/task.styles.css']
    }),
    __metadata("design:paramtypes", [])
], TaskDetailsComponent);
exports.TaskDetailsComponent = TaskDetailsComponent;
//# sourceMappingURL=task-details.components.js.map