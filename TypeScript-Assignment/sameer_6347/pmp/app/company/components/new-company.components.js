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
var company_1 = require("../models/company");
var company_service_1 = require("../services/company-service");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var NewCompanyComponents = (function () {
    function NewCompanyComponents(_serviceCompany, _location, _route) {
        this._serviceCompany = _serviceCompany;
        this._location = _location;
        this._route = _route;
        this.title = "New Company";
        this.id = "";
    }
    //@Input() event: Event;
    NewCompanyComponents.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this._route.params.subscribe(function (params) {
            _this.id = params["id"];
            if (_this.id) {
                console.log(_this.id);
                _this._serviceCompany.getSingle(_this.id).subscribe(function (data) {
                    console.log(data);
                    _this.title = "Edit Company";
                    _this.newCompany = new company_1.Company();
                    _this.newCompany.companyForm = new forms_1.FormGroup({
                        companyId: new forms_1.FormControl(data.companyId, forms_1.Validators.required),
                        companyCode: new forms_1.FormControl(data.companyCode, [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(5)]),
                        name: new forms_1.FormControl(data.name, forms_1.Validators.required),
                        address: new forms_1.FormControl(data.address, forms_1.Validators.required),
                        city: new forms_1.FormControl(data.city, forms_1.Validators.required),
                        contact: new forms_1.FormControl(data.contact, forms_1.Validators.required),
                        email: new forms_1.FormControl(data.email, forms_1.Validators.required),
                    });
                });
            }
            else {
                _this.title = "New Company";
                _this.newCompany = new company_1.Company();
            }
        });
    };
    NewCompanyComponents.prototype.insertEvent = function () {
        var _this = this;
        this.newCompany.companyForm.value.image = "images/noimage.png";
        if (this.title == "Edit Company") {
            console.log("Edit");
            this.newCompany.companyForm.value._id = this.id;
            this._serviceCompany.update(this.newCompany.companyForm.value).subscribe(function (data) {
                _this.newCompany = new company_1.Company();
                console.log("Updated Successfully !");
                //alert("Updated Successfully !");
                _this._location.back();
            });
        }
        else {
            this._serviceCompany.insertEvents(this.newCompany.companyForm.value).subscribe(function (data) {
                _this.newCompany = new company_1.Company();
                console.log("Company Added Successfully !");
                //alert("Company Added Successfully !");
                _this._location.back();
            });
        }
    };
    NewCompanyComponents.prototype.ngOnChanges = function () {
        // this.newEvent = this.event;
    };
    return NewCompanyComponents;
}());
NewCompanyComponents = __decorate([
    core_1.Component({
        selector: 'new-company',
        templateUrl: 'app/company/views/new-company.component.html',
        styles: ['input.ng-invalid { border-left:3px solid red }', 'input.ng-valid { border-left:3px solid green }'],
        styleUrls: ['app/company/css/company.styles.css']
    }),
    __metadata("design:paramtypes", [company_service_1.CompanyService, common_1.Location, router_1.ActivatedRoute])
], NewCompanyComponents);
exports.NewCompanyComponents = NewCompanyComponents;
//# sourceMappingURL=new-company.components.js.map