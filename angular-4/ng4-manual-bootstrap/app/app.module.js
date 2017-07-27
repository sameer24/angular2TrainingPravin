"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//Components import
var app_component_1 = require("./app.component");
//Decorator
var AppModule = (function () {
    /**
     * imports : List of module which want to import from Angular and Custom
     * declarations : Third party component
     * providers : Services (this will be singlton and injectable)
     * bootstrap : root component name
     * exports : services or methods to export outside this module
     */
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
        exports: []
    })
    /**
     * imports : List of module which want to import from Angular and Custom
     * declarations : Third party component
     * providers : Services (this will be singlton and injectable)
     * bootstrap : root component name
     * exports : services or methods to export outside this module
     */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map