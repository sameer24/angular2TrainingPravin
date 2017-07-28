"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var company_list_components_1 = require("./components/company-list.components");
var company_details_components_1 = require("./components/company-details.components");
var new_company_components_1 = require("./components/new-company.components");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var company_service_1 = require("./services/company-service");
var contains_pipe_1 = require("../contains.pipe");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var CompanyModule = (function () {
    function CompanyModule() {
    }
    return CompanyModule;
}());
CompanyModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule],
        declarations: [company_list_components_1.CompanyListComponents, company_details_components_1.CompanyDetailsComponent, new_company_components_1.NewCompanyComponents, contains_pipe_1.FilterContains],
        bootstrap: [],
        exports: [company_list_components_1.CompanyListComponents, new_company_components_1.NewCompanyComponents],
        providers: [company_service_1.CompanyService]
    })
], CompanyModule);
exports.CompanyModule = CompanyModule;
//# sourceMappingURL=company.module.js.map