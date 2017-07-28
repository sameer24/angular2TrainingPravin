import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Employee } from "../models/employee";
import { EmployeeService } from "../services/employee-service"
import { ActivatedRoute, Params } from "@angular/router"
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Location } from "@angular/common";

@Component({
    selector: 'new-employee',
    templateUrl: 'app/employee/views/new-employee.component.html',
    styles: ['input.ng-invalid { border-left:3px solid red }', 'input.ng-valid { border-left:3px solid green }'],
    styleUrls: ['app/employee/css/employee.styles.css']
})

export class NewEmployeeComponents implements OnInit, OnChanges {

    constructor(private _serviceEmp: EmployeeService,private _route: ActivatedRoute , private _location :Location) {
    }

    title: string = "New Employee";
    newemployee: Employee;
    //@Input() event: Event;
    id: string = "";

    ngOnInit() {
        let id: string;
        this._route.params.subscribe(
            params => {
                this.id = params["id"];
                if (this.id) {
                    console.log(this.id);
                    this._serviceEmp.getSingle(this.id).subscribe(
                        data => {
                            console.log(data);
                            this.title = "Edit Employee";
                            this.newemployee = new Employee();
                            this.newemployee.employeeForm = new FormGroup({
                                employeeId: new FormControl(data.employeeId, Validators.required),
                                employeeCode: new FormControl(data.employeeCode, [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
                                name: new FormControl(data.name, Validators.required),
                                address: new FormControl(data.address, Validators.required),
                                city: new FormControl(data.city, Validators.required),
                                contact: new FormControl(data.contact, Validators.required),
                                email: new FormControl(data.email, Validators.required),
                                designation: new FormControl(data.designation, Validators.required),
                                rating: new FormControl(data.rating, Validators.required)
                            });
                        }
                    )
                } else {
                    this.title = "New Employee";
                    this.newemployee = new Employee();
                }

            }
        );
    }

    ngOnChanges() {
        // this.newEvent = this.event;
    }

    // insertEmployee(): void {
    //     this.newemployee.employeeForm.value.image = "images/noimage.png"
    //     this._serviceEmp.insertEmployee(this.newemployee.employeeForm.value).subscribe(
    //         data => {
    //             this.newemployee = new Employee();
    //             console.log("employee Added Successfully !")
    //         }
    //     )
    // }

    insertEmployee(): void {
        this.newemployee.employeeForm.value.image = "images/noimage.png"

        if (this.title == "Edit Employee") {
            console.log("Edit");
            this.newemployee.employeeForm.value._id = this.id;
            this._serviceEmp.update(this.newemployee.employeeForm.value).subscribe(
                data => {
                    this.newemployee = new Employee();
                    console.log("Updated Successfully !")
                    this._location.back();
                    //alert("Updated Successfully !");
                })

        }
        else {
            this._serviceEmp.insertEmployee(this.newemployee.employeeForm.value).subscribe(
                data => {
                    this.newemployee = new Employee();
                    console.log("employee Added Successfully !")
                    this._location.back();
                   //alert("Employee Added Successfully !");
                }
            )
        }

}