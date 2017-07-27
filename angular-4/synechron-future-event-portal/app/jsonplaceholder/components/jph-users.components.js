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
var jph_posts_service_1 = require("../services/jph.posts.service");
var JphUserComponent = (function () {
    function JphUserComponent(_JphPostsService) {
        this._JphPostsService = _JphPostsService;
    }
    JphUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._JphPostsService.getAllUsers().subscribe(function (data) {
            _this.users = data;
        }, function (err) { return console.log(err); }, function () { return console.log('completed'); });
    };
    return JphUserComponent;
}());
JphUserComponent = __decorate([
    core_1.Component({
        selector: 'jph-Users',
        templateUrl: 'app/jsonplaceholder/views/jph.users.component.html'
    }),
    __metadata("design:paramtypes", [jph_posts_service_1.JphPostsService])
], JphUserComponent);
exports.JphUserComponent = JphUserComponent;
//# sourceMappingURL=jph-users.components.js.map