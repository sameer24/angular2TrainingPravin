import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { EmployeeListComponent } from "./components/employee-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.components";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [RouterModule,CommonModule],
    exports: [EmployeeListComponent,EmployeeDetailsComponent],
    declarations: [EmployeeListComponent,EmployeeDetailsComponent],
    providers: [],
})
export class EmployeeModule { }
