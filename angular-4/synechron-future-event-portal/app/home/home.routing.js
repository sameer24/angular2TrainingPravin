"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_components_1 = require("./components/home.components");
var homeRouteConfig = [
    {
        path: '',
        component: home_components_1.HomeComponent
    }
];
exports.homeRouting = router_1.RouterModule.forChild(homeRouteConfig);
//# sourceMappingURL=home.routing.js.map