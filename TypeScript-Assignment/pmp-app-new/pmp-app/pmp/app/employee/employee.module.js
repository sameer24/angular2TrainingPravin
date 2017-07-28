"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_list_components_1 = require("./components/employee-list.components");
var employee_details_components_1 = require("./components/employee-details.components");
var new_employee_components_1 = require("./components/new-employee.components");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var employee_service_1 = require("./services/employee-service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule
        ],
        declarations: [
            employee_list_components_1.EmployeeListComponents,
            employee_details_components_1.EmployeeDetailsComponent,
            new_employee_components_1.NewEmployeeComponents
        ],
        bootstrap: [],
        exports: [
            employee_list_components_1.EmployeeListComponents,
            new_employee_components_1.NewEmployeeComponents
        ],
        providers: [employee_service_1.EmployeeService]
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map