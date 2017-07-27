import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { EmployeeListComponent } from "./components/employee-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.components";


@NgModule({
    imports: [CommonModule],
    exports: [EmployeeListComponent,EmployeeDetailsComponent],
    declarations: [EmployeeListComponent,EmployeeDetailsComponent],
    providers: [],
})
export class EmployeeModule { }
