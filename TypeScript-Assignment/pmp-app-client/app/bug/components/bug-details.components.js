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
var bug_1 = require("../models/bug");
var EmployeeDetailsComponent = (function () {
    function EmployeeDetailsComponent() {
        //this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/node.png',10)         
        this.showDetail = true;
    }
    EmployeeDetailsComponent.prototype.ngOnChanges = function () {
        this.showDetail = true;
    };
    return EmployeeDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", bug_1.Bug)
], EmployeeDetailsComponent.prototype, "bug", void 0);
EmployeeDetailsComponent = __decorate([
    core_1.Component({
        selector: 'bug-detail',
        templateUrl: 'app/bug/views/bug-details.component.html',
        styleUrls: ['app/bug/css/bug.styles.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeDetailsComponent);
exports.EmployeeDetailsComponent = EmployeeDetailsComponent;
//# sourceMappingURL=bug-details.components.js.map