"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bug_list_components_1 = require("./components/bug-list.components");
var bug_details_components_1 = require("./components/bug-details.components");
var common_1 = require("@angular/common");
var bug_service_1 = require("./services/bug-service");
var router_1 = require("@angular/router");
var BugModule = (function () {
    function BugModule() {
    }
    return BugModule;
}());
BugModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        declarations: [bug_list_components_1.BugListComponents, bug_details_components_1.BugDetailsComponent],
        bootstrap: [],
        exports: [bug_list_components_1.BugListComponents],
        providers: [bug_service_1.BugService]
    })
], BugModule);
exports.BugModule = BugModule;
//# sourceMappingURL=bug.module.js.map