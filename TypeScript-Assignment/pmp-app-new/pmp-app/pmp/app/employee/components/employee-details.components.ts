import { Component, Input, OnInit } from "@angular/core";
import { Employee } from "../models/employee";
import { EmployeeService } from "../services/employee-service"
import { ActivatedRoute, Params } from "@angular/router"
@Component({
    selector: 'employee-details',
    templateUrl: 'app/employee/views/employee-details.component.html',
    styleUrls: ['app/employee/css/employee.styles.css']
})

export class EmployeeDetailsComponent implements OnInit {
    constructor(private _service: EmployeeService, private _route: ActivatedRoute) {
    }
    title: string = "Employee Details";
    // @Input() id: string = "";
    employee: Employee;

    ngOnInit() {

        let id: string;
        this._route.params.subscribe(
            params => id = params["id"]
        );

        this._service.getSingle(id).subscribe(
            data => this.employee = data
        )
    }
}