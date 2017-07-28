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
var employee_service_1 = require("../services/employee-service");
var EmployeeListComponents = (function () {
    function EmployeeListComponents(_service) {
        this._service = _service;
        this.title = "Employee List";
        this.searchLetterContains = "";
        this.id = "";
    }
    EmployeeListComponents.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getAll().subscribe(function (data) { return _this.employees = data; });
    };
    EmployeeListComponents.prototype.delete = function (id) {
        var _this = this;
        this._service.deleteRecord(id).subscribe(function (data) {
            console.log("Deleted");
            _this._service.getAll().subscribe(function (data) { return _this.employees = data; });
        });
    };
    return EmployeeListComponents;
}());
EmployeeListComponents = __decorate([
    core_1.Component({
        selector: 'employees-list',
        templateUrl: 'app/employee/views/employee-list.component.html',
        styleUrls: ['app/employee/css/employee.styles.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeListComponents);
exports.EmployeeListComponents = EmployeeListComponents;
//# sourceMappingURL=employee-list.components.js.map