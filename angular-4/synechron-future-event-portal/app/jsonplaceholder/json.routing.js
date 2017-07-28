"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var jph_posts_components_1 = require("./components/jph-posts.components");
var jphRouteConfig = [
    {
        path: '',
        component: jph_posts_components_1.JphPostComponent
    }
];
exports.jphRouting = router_1.RouterModule.forChild(jphRouteConfig);
//# sourceMappingURL=json.routing.js.map