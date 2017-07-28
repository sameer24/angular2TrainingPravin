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
var bug_service_1 = require("../services/bug-service");
var router_1 = require("@angular/router");
var BugDetailsComponent = (function () {
    function BugDetailsComponent(_service, _route) {
        this._service = _service;
        this._route = _route;
        this.title = "Bug Details";
    }
    BugDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this._route.params.subscribe(function (params) { return id = params["id"]; });
        this._service.getSingle(id).subscribe(function (data) { return _this.bug = data; });
    };
    return BugDetailsComponent;
}());
BugDetailsComponent = __decorate([
    core_1.Component({
        selector: 'bug-details',
        templateUrl: 'app/bug/views/bug-details.component.html',
        styleUrls: ['app/bug/css/bug.styles.css']
    }),
    __metadata("design:paramtypes", [bug_service_1.BugService, router_1.ActivatedRoute])
], BugDetailsComponent);
exports.BugDetailsComponent = BugDetailsComponent;
//# sourceMappingURL=bug-details.components.js.map