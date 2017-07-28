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
var Project_service_1 = require("../services/Project.service");
var ProjectListComponent = (function () {
    function ProjectListComponent(_ProjectService) {
        var _this = this;
        this._ProjectService = _ProjectService;
        this.title = 'project List 1';
        this.subTitle = 'Published by 1 Synechron';
        //  this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/photo.png',10)
        this._ProjectService.getAllProject().subscribe(function (data) {
            console.log(data);
            _this.project = data;
        }, function (err) { return console.log(err); }, function () { console.log('completed'); });
    }
    ProjectListComponent.prototype.showProject = function (prj) {
        this.selectedProject = prj;
    };
    ProjectListComponent.prototype.hideDetail = function () {
        this.selectedProject = '';
    };
    return ProjectListComponent;
}());
ProjectListComponent = __decorate([
    core_1.Component({
        selector: 'project-list',
        templateUrl: 'app/project/views/project-list.component.html'
    }),
    __metadata("design:paramtypes", [Project_service_1.ProjectService])
], ProjectListComponent);
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map