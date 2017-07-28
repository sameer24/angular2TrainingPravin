import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"

import { HomeComponent } from "./home/components/home.component";

import { CompanyListComponents } from "./company/components/company-list.components";
import { CompanyDetailsComponent } from "./company/components/company-details.components";
import { NewCompanyComponents } from "./company/components/new-company.components";
 
import { EmployeeListComponents } from "./employee/components/employee-list.components";
import { EmployeeDetailsComponent } from "./employee/components/employee-details.components";
import { NewEmployeeComponents } from "./employee/components/new-employee.components";
 
import { ProjrctListComponents } from "./project/components/project-list.components";
import { ProjectDetailsComponent } from "./project/components/project-details.components";

import { UserstoryListComponents } from "./userstory/components/us-list.components";
import { UsersoryDetailsComponent } from "./userstory/components/us-details.components";

import { TaskListComponents } from "./task/components/task-list.components";
import { TaskDetailsComponent } from "./task/components/task-details.components";

import { BugListComponents } from "./bug/components/bug-list.components";
import { BugDetailsComponent } from "./bug/components/bug-details.components";


const appRoutes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    
    {
        path: 'newcompany/:id', component: NewCompanyComponents
    },
     {
        path: 'newemployee/:id', component: NewEmployeeComponents
    },
    {
        path: 'bug', component: BugListComponents
    }, 
    {
        path: 'bug/:id', component: BugDetailsComponent
    },
    {
        path: 'task', component: TaskListComponents
    }, 
    {
        path: 'task/:id', component: TaskDetailsComponent
    },
    {
        path: 'userstory', component: UserstoryListComponents
    }, 
    {
        path: 'userstory/:id', component: UsersoryDetailsComponent
    },
    {
        path: 'project', component: ProjrctListComponents
    },
    {
        path: 'project/:id', component: ProjectDetailsComponent
    },
    {
        path: 'company', component: CompanyListComponents
    }, 
    {
        path: 'company/:id', component: CompanyDetailsComponent
    },
    {
        path: 'newcompany', component: NewCompanyComponents
    },
    {
        path: 'employee', component: EmployeeListComponents
    },
    {
         path: 'employee/:id', component: EmployeeDetailsComponent
    },
     {
         path: 'newemployee', component: NewEmployeeComponents
    },
    { 
        path: '', component: HomeComponent, pathMatch: 'full' 
    },
    {
        path: '**', component: HomeComponent
    }
]


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

