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
var task_service_1 = require("../services/task-service");
var TaskListComponents = (function () {
    function TaskListComponents(_service) {
        this._service = _service;
        this.title = "Task List";
        this.searchLetterContains = "";
    }
    TaskListComponents.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getAll().subscribe(function (data) { return _this.tasks = data; });
    };
    TaskListComponents.prototype.delete = function (id) {
        var _this = this;
        this._service.deleteRecord(id).subscribe(function (data) {
            console.log("Deleted");
            _this._service.getAll().subscribe(function (data) { return _this.tasks = data; });
        });
    };
    return TaskListComponents;
}());
TaskListComponents = __decorate([
    core_1.Component({
        selector: 'task-list',
        templateUrl: 'app/task/views/task-list.component.html',
        styleUrls: ['app/task/css/task.styles.css']
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskListComponents);
exports.TaskListComponents = TaskListComponents;
//# sourceMappingURL=task-list.components.js.map