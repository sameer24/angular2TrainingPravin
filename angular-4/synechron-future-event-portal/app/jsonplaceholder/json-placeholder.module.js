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
var jph_posts_components_1 = require("./components/jph-posts.components");
var jph_users_components_1 = require("./components/jph-users.components");
var jph_posts_service_1 = require("./services/jph.posts.service");
var json_routing_1 = require("./json.routing");
var JsonPlaceHolderModule = (function () {
    function JsonPlaceHolderModule() {
    }
    return JsonPlaceHolderModule;
}());
JsonPlaceHolderModule = __decorate([
    core_1.NgModule({
        imports: [json_routing_1.jphRouting, common_1.CommonModule],
        exports: [jph_posts_components_1.JphPostComponent, jph_users_components_1.JphUserComponent],
        declarations: [jph_posts_components_1.JphPostComponent, jph_users_components_1.JphUserComponent],
        providers: [jph_posts_service_1.JphPostsService],
    })
], JsonPlaceHolderModule);
exports.JsonPlaceHolderModule = JsonPlaceHolderModule;
//# sourceMappingURL=json-placeholder.module.js.map