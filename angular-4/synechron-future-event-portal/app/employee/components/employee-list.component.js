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
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.title = 'Employee List';
        this.subTitle = 'Published by Synechron';
        this.employees = [
            {
                employeeID: 1,
                employeeFName: 'Sameer',
                eventLName: 'Kelkar ',
                jobDescription: 'Job Desc',
                address: 'Address',
                phone: '123456789',
                birthDate: new Date(),
                joiningDate: new Date(),
                bankAccountNumber: 100,
                pfNumber: 50,
                photo: 'images/node.png',
                rating: 10
            },
            {
                employeeID: 2,
                employeeFName: 'Santosh',
                eventLName: 'Joshi',
                jobDescription: 'Job Desc - 3',
                address: 'Address',
                phone: '123456789',
                birthDate: new Date(),
                joiningDate: new Date(),
                bankAccountNumber: 100,
                pfNumber: 50,
                photo: 'images/jquery.png',
                rating: 10
            }
        ];
        //  this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/photo.png',10)
    }
    EmployeeListComponent.prototype.showEmployee = function (emp) {
        this.selectedEmployee = emp;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        templateUrl: 'app/employee/views/employee-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map