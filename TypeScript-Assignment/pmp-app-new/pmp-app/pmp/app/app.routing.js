"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/components/home.component");
var company_list_components_1 = require("./company/components/company-list.components");
var company_details_components_1 = require("./company/components/company-details.components");
var new_company_components_1 = require("./company/components/new-company.components");
var employee_list_components_1 = require("./employee/components/employee-list.components");
var employee_details_components_1 = require("./employee/components/employee-details.components");
var new_employee_components_1 = require("./employee/components/new-employee.components");
var project_list_components_1 = require("./project/components/project-list.components");
var project_details_components_1 = require("./project/components/project-details.components");
var us_list_components_1 = require("./userstory/components/us-list.components");
var us_details_components_1 = require("./userstory/components/us-details.components");
var task_list_components_1 = require("./task/components/task-list.components");
var task_details_components_1 = require("./task/components/task-details.components");
var bug_list_components_1 = require("./bug/components/bug-list.components");
var bug_details_components_1 = require("./bug/components/bug-details.components");
var appRoutes = [
    {
        path: 'home', component: home_component_1.HomeComponent
    },
    {
        path: 'newcompany/:id', component: new_company_components_1.NewCompanyComponents
    },
    {
        path: 'newemployee/:id', component: new_employee_components_1.NewEmployeeComponents
    },
    {
        path: 'bug', component: bug_list_components_1.BugListComponents
    },
    {
        path: 'bug/:id', component: bug_details_components_1.BugDetailsComponent
    },
    {
        path: 'task', component: task_list_components_1.TaskListComponents
    },
    {
        path: 'task/:id', component: task_details_components_1.TaskDetailsComponent
    },
    {
        path: 'userstory', component: us_list_components_1.UserstoryListComponents
    },
    {
        path: 'userstory/:id', component: us_details_components_1.UsersoryDetailsComponent
    },
    {
        path: 'project', component: project_list_components_1.ProjrctListComponents
    },
    {
        path: 'project/:id', component: project_details_components_1.ProjectDetailsComponent
    },
    {
        path: 'company', component: company_list_components_1.CompanyListComponents
    },
    {
        path: 'company/:id', component: company_details_components_1.CompanyDetailsComponent
    },
    {
        path: 'newcompany', component: new_company_components_1.NewCompanyComponents
    },
    {
        path: 'employee', component: employee_list_components_1.EmployeeListComponents
    },
    {
        path: 'employee/:id', component: employee_details_components_1.EmployeeDetailsComponent
    },
    {
        path: 'newemployee', component: new_employee_components_1.NewEmployeeComponents
    },
    {
        path: '', component: home_component_1.HomeComponent, pathMatch: 'full'
    },
    {
        path: '**', component: home_component_1.HomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map