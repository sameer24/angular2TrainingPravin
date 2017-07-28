import { NgModule } from "@angular/core";
import { EmployeeListComponents } from "./components/employee-list.components";
import { EmployeeDetailsComponent } from "./components/employee-details.components";
import { NewEmployeeComponents } from "./components/new-employee.components";
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { EmployeeService } from "./services/employee-service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"

@NgModule({
    imports: [
        CommonModule,HttpModule,FormsModule, ReactiveFormsModule,RouterModule
    ],
    declarations:
    [
        EmployeeListComponents,
        EmployeeDetailsComponent,
        NewEmployeeComponents
        
    ],
    bootstrap: [],
    exports: [
        EmployeeListComponents ,
        NewEmployeeComponents    
    ],
    providers: [EmployeeService]
})


export class EmployeeModule {

}