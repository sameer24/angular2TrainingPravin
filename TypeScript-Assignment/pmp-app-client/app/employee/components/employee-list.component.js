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
var employee_service_1 = require("../services/employee.service");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_EmployeeService) {
        var _this = this;
        this._EmployeeService = _EmployeeService;
        this.title = 'Employee List 1';
        this.subTitle = 'Published by 1 Synechron';
        //  this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/photo.png',10)
        this._EmployeeService.getAllEmployee().subscribe(function (data) {
            console.log(data);
            _this.employees = data;
        }, function (err) { return console.log(err); }, function () { console.log('completed'); });
    }
    EmployeeListComponent.prototype.showEmployee = function (emp) {
        this.selectedEmployee = emp;
    };
    EmployeeListComponent.prototype.hideDetail = function () {
        this.selectedEmployee = '';
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        templateUrl: 'app/employee/views/employee-list.component.html'
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map