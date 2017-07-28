
import { Component, Input, OnInit } from "@angular/core";
import { Employee } from "../models/employee";
import { EmployeeService } from "../services/employee-service"

@Component({
    selector: 'employees-list',
    templateUrl: 'app/employee/views/employee-list.component.html',
    styleUrls: ['app/employee/css/employee.styles.css']
})

export class EmployeeListComponents implements OnInit {
    title: string = "Employee List";
    employees: Employee[];
    searchLetterContains: string = "";
    id: string = "";
    ngOnInit() {
        this._service.getAll().subscribe(
            data => this.employees = data
        )
    }

 delete(id: string) {
        this._service.deleteRecord(id).subscribe(
            data =>{ 
                console.log("Deleted");
                  this._service.getAll().subscribe(
            data => this.employees = data
        )
            }
        )
 }

    constructor(private _service: EmployeeService) {
    }
}