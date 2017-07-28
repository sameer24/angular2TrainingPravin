"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var parent_component_1 = require("./compononents/parent.component");
var child_component_1 = require("./compononents/child.component");
var parent_child_routing_1 = require("./parent-child.routing");
var ParentChildModule = (function () {
    function ParentChildModule() {
    }
    return ParentChildModule;
}());
ParentChildModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, parent_child_routing_1.parentRouting],
        exports: [parent_component_1.ParentComponent],
        declarations: [parent_component_1.ParentComponent, child_component_1.ChildComponent],
        providers: [],
    })
], ParentChildModule);
exports.ParentChildModule = ParentChildModule;
//# sourceMappingURL=parent-child.module.js.map