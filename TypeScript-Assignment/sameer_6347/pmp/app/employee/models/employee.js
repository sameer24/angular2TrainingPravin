"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var Employee = (function () {
    function Employee(employeeId, employeeCode, name, address, city, contact, email, designation, rating, _id) {
        this.employeeId = employeeId;
        this.employeeCode = employeeCode;
        this.name = name;
        this.address = address;
        this.city = city;
        this.contact = contact;
        this.email = email;
        this.designation = designation;
        this.rating = rating;
        this._id = _id;
        this.employeeForm = new forms_1.FormGroup({
            employeeId: new forms_1.FormControl("000", forms_1.Validators.required),
            employeeCode: new forms_1.FormControl("SY", [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(5)]),
            name: new forms_1.FormControl("-", forms_1.Validators.required),
            address: new forms_1.FormControl("-", forms_1.Validators.required),
            city: new forms_1.FormControl("-", forms_1.Validators.required),
            contact: new forms_1.FormControl("-", forms_1.Validators.required),
            email: new forms_1.FormControl(0, forms_1.Validators.required),
            designation: new forms_1.FormControl(0, forms_1.Validators.required),
            rating: new forms_1.FormControl(0, forms_1.Validators.required)
        });
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map