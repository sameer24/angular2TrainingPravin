"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FilterByPipe = (function () {
    function FilterByPipe() {
    }
    FilterByPipe.prototype.transform = function (value, args) {
        var filter = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter(function (event) {
            return event.eventName.toLocaleLowerCase().indexOf(filter) != -1;
        }) : value;
    };
    return FilterByPipe;
}());
FilterByPipe = __decorate([
    core_1.Pipe({
        name: 'filterBy'
    })
], FilterByPipe);
exports.FilterByPipe = FilterByPipe;
//write the filters which will filter the events list 
//1 Start with
//2 End with
//Write a filter for Start Date which will search for given date. use HTML date control
//# sourceMappingURL=filter-by.pipe.js.map