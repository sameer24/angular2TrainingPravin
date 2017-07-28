"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var Company = (function () {
    function Company(companyId, companyCode, name, address, city, contact, email, image, _id) {
        this.companyId = companyId;
        this.companyCode = companyCode;
        this.name = name;
        this.address = address;
        this.city = city;
        this.contact = contact;
        this.email = email;
        this.image = image;
        this._id = _id;
        this.companyForm = new forms_1.FormGroup({
            companyId: new forms_1.FormControl("1000", forms_1.Validators.required),
            companyCode: new forms_1.FormControl("Company", [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(5)]),
            name: new forms_1.FormControl("-", forms_1.Validators.required),
            address: new forms_1.FormControl("-", forms_1.Validators.required),
            city: new forms_1.FormControl("-", forms_1.Validators.required),
            contact: new forms_1.FormControl("-", forms_1.Validators.required),
            email: new forms_1.FormControl(0, forms_1.Validators.required),
        });
    }
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=company.js.map