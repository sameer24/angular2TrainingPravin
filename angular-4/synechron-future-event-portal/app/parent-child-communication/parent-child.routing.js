"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var parent_component_1 = require("./compononents/parent.component");
var parentRouteConfig = [
    {
        path: '',
        component: parent_component_1.ParentComponent
    }
];
exports.parentRouting = router_1.RouterModule.forChild(parentRouteConfig);
//# sourceMappingURL=parent-child.routing.js.map