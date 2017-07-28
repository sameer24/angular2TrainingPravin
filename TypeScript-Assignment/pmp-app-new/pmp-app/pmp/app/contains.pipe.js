"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Company } from "../models/company";
var FilterContains = (function () {
    function FilterContains() {
    }
    FilterContains.prototype.transform = function (value, args) {
        var filter = args ? args.toString().toLocaleLowerCase() : null;
        console.log(args);
        return filter ? value.filter(function (obj) { return obj.name.toLocaleLowerCase().indexOf(filter) != -1; }) : value;
    };
    return FilterContains;
}());
FilterContains = __decorate([
    core_1.Pipe({
        name: 'filterContains'
    })
], FilterContains);
exports.FilterContains = FilterContains;
//# sourceMappingURL=contains.pipe.js.map