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
var us_service_1 = require("../services/us-service");
var UserstoryListComponents = (function () {
    function UserstoryListComponents(_service) {
        this._service = _service;
        this.title = "Userstories List";
        this.searchLetterContains = "";
    }
    UserstoryListComponents.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getAll().subscribe(function (data) { return _this.userstories = data; });
    };
    UserstoryListComponents.prototype.delete = function (id) {
        var _this = this;
        this._service.deleteRecord(id).subscribe(function (data) {
            console.log("Deleted");
            _this._service.getAll().subscribe(function (data) { return _this.userstories = data; });
        });
    };
    return UserstoryListComponents;
}());
UserstoryListComponents = __decorate([
    core_1.Component({
        selector: 'us-list',
        templateUrl: 'app/userstory/views/us-list.component.html',
        styleUrls: ['app/userstory/css/us.styles.css']
    }),
    __metadata("design:paramtypes", [us_service_1.UserstoryService])
], UserstoryListComponents);
exports.UserstoryListComponents = UserstoryListComponents;
//# sourceMappingURL=us-list.components.js.map