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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var common_1 = require("@angular/common");
var ProjectService = (function () {
    function ProjectService(_http, _location) {
        this._http = _http;
        this._location = _location;
    }
    ProjectService.prototype.getAll = function () {
        return this._http.get("http://localhost:8005/projects").map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getSingle = function (id) {
        console.log(id);
        return this._http.get("http://localhost:8005/projects/" + id).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.deleteRecord = function (id) {
        return this._http.delete("http://localhost:8005/projects/" + id).map(function (res) { return res; });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, common_1.Location])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project-service.js.map