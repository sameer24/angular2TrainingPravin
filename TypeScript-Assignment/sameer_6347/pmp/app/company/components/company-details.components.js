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
var company_service_1 = require("../services/company-service");
var router_1 = require("@angular/router");
var CompanyDetailsComponent = (function () {
    function CompanyDetailsComponent(_service, _route) {
        this._service = _service;
        this._route = _route;
        this.title = "Company Details";
    }
    CompanyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this._route.params.subscribe(function (params) { return id = params["id"]; });
        this._service.getSingle(id).subscribe(function (data) { return _this.company = data; });
    };
    return CompanyDetailsComponent;
}());
CompanyDetailsComponent = __decorate([
    core_1.Component({
        selector: 'company-details',
        templateUrl: 'app/company/views/company-details.component.html',
        styleUrls: ['app/company/css/company.styles.css']
    }),
    __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.ActivatedRoute])
], CompanyDetailsComponent);
exports.CompanyDetailsComponent = CompanyDetailsComponent;
//# sourceMappingURL=company-details.components.js.map