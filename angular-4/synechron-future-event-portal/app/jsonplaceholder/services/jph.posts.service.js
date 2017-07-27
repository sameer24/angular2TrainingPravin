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
var JphPostsService = (function () {
    function JphPostsService(_http) {
        this._http = _http;
    }
    JphPostsService.prototype.getAllPosts = function () {
        return this._http.get("https://jsonplaceholder.typicode.com/posts").map(function (res) { return res.json(); });
    };
    JphPostsService.prototype.getAllUsers = function () {
        return this._http.get("https://jsonplaceholder.typicode.com/users").map(function (res) { return res.json(); });
    };
    return JphPostsService;
}());
JphPostsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JphPostsService);
exports.JphPostsService = JphPostsService;
//# sourceMappingURL=jph.posts.service.js.map