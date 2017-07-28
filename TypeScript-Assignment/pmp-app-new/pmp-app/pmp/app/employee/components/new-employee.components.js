"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_1 = require("../models/employee");
var employee_service_1 = require("../services/employee-service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var NewEmployeeComponents = (function () {
    function NewEmployeeComponents(_serviceEmp, _route, _location) {
        this._serviceEmp = _serviceEmp;
        this._route = _route;
        this._location = _location;
        this.title = "New Employee";
        //@Input() event: Event;
        this.id = "";
    }
    NewEmployeeComponents.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this._route.params.subscribe(function (params) {
            _this.id = params["id"];
            if (_this.id) {
                console.log(_this.id);
                _this._serviceEmp.getSingle(_this.id).subscribe(function (data) {
                    console.log(data);
                    _this.title = "Edit Employee";
                    _this.newemployee = new employee_1.Employee();
                    _this.newemployee.employeeForm = new forms_1.FormGroup({
                        employeeId: new forms_1.FormControl(data.employeeId, forms_1.Validators.required),
                        employeeCode: new forms_1.FormControl(data.employeeCode, [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(5)]),
                        name: new forms_1.FormControl(data.name, forms_1.Validators.required),
                        address: new forms_1.FormControl(data.address, forms_1.Validators.required),
                        city: new forms_1.FormControl(data.city, forms_1.Validators.required),
                        contact: new forms_1.FormControl(data.contact, forms_1.Validators.required),
                        email: new forms_1.FormControl(data.email, forms_1.Validators.required),
                        designation: new forms_1.FormControl(data.designation, forms_1.Validators.required),
                        rating: new forms_1.FormControl(data.rating, forms_1.Validators.required)
                    });
                });
            }
            else {
                _this.title = "New Employee";
                _this.newemployee = new employee_1.Employee();
            }
        });
    };
    NewEmployeeComponents.prototype.ngOnChanges = function () {
        // this.newEvent = this.event;
    };
    // insertEmployee(): void {
    //     this.newemployee.employeeForm.value.image = "images/noimage.png"
    //     this._serviceEmp.insertEmployee(this.newemployee.employeeForm.value).subscribe(
    //         data => {
    //             this.newemployee = new Employee();
    //             console.log("employee Added Successfully !")
    //         }
    //     )
    // }
    NewEmployeeComponents.prototype.insertEmployee = function () {
        var _this = this;
        this.newemployee.employeeForm.value.image = "images/noimage.png";
        if (this.title == "Edit Employee") {
            console.log("Edit");
            this.newemployee.employeeForm.value._id = this.id;
            this._serviceEmp.update(this.newemployee.employeeForm.value).subscribe(function (data) {
                _this.newemployee = new employee_1.Employee();
                console.log("Updated Successfully !");
                _this._location.back();
                //alert("Updated Successfully !");
            });
        }
        else {
            this._serviceEmp.insertEmployee(this.newemployee.employeeForm.value).subscribe(function (data) {
                _this.newemployee = new employee_1.Employee();
                console.log("employee Added Successfully !");
                _this._location.back();
                //alert("Employee Added Successfully !");
            });
        }
    };
    return NewEmployeeComponents;
}());
NewEmployeeComponents = __decorate([
    core_1.Component({
        selector: 'new-employee',
        templateUrl: 'app/employee/views/new-employee.component.html',
        styles: ['input.ng-invalid { border-left:3px solid red }', 'input.ng-valid { border-left:3px solid green }'],
        styleUrls: ['app/employee/css/employee.styles.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute, common_1.Location])
], NewEmployeeComponents);
exports.NewEmployeeComponents = NewEmployeeComponents;
//# sourceMappingURL=new-employee.components.js.map