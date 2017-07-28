import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmployeeListComponent } from "./components/employee-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.components";


const employeeRouteConfig: Routes = [
    {
        path: '',
        component: EmployeeListComponent
    },
    {
        path: ':id',
        component: EmployeeDetailsComponent
    }

]

export const employeeRouting: ModuleWithProviders = RouterModule.forChild(employeeRouteConfig);