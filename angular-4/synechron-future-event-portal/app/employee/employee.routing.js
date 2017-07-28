"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var employee_list_component_1 = require("./components/employee-list.component");
var employee_details_components_1 = require("./components/employee-details.components");
var employeeRouteConfig = [
    {
        path: '',
        component: employee_list_component_1.EmployeeListComponent
    },
    {
        path: ':id',
        component: employee_details_components_1.EmployeeDetailsComponent
    }
];
exports.employeeRouting = router_1.RouterModule.forChild(employeeRouteConfig);
//# sourceMappingURL=employee.routing.js.map