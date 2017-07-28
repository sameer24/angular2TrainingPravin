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
var BugListComponents = (function () {
    function BugListComponents(_service, _route) {
        this._service = _service;
        this._route = _route;
        this.title = "Bug List";
        this.searchLetterContains = "";
    }
    BugListComponents.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getAll().subscribe(function (data) { return _this.bugs = data; });
    };
    BugListComponents.prototype.delete = function (id) {
        var _this = this;
        this._service.deleteRecord(id).subscribe(function (data) {
            console.log("Deleted");
            _this._service.getAll().subscribe(function (data) { return _this.bugs = data; });
        });
    };
    return BugListComponents;
}());
BugListComponents = __decorate([
    core_1.Component({
        selector: 'bug-list',
        templateUrl: 'app/bug/views/bug-list.component.html',
        styleUrls: ['app/bug/css/bug.styles.css']
    }),
    __metadata("design:paramtypes", [bug_service_1.BugService, router_1.ActivatedRoute])
], BugListComponents);
exports.BugListComponents = BugListComponents;
//# sourceMappingURL=bug-list.components.js.map