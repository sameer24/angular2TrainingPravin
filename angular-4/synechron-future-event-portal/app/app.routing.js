"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var defaultRoutes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];
var homeRoutes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];
var eventsRoutes = [
    {
        path: 'events',
        loadChildren: 'app/events/events.module#EventsModule'
    }
];
var employeeRoutes = [
    {
        path: 'employee',
        loadChildren: 'app/employee/employee.module#EmployeeModule'
    }
];
var jsonRoutes = [
    {
        path: 'posts',
        loadChildren: 'app/jsonplaceholder/json-placeholder.module#JsonPlaceHolderModule'
    }
];
var parentRoutes = [
    {
        path: 'parent-child',
        loadChildren: 'app/parent-child-communication/parent-child.module#ParentChildModule'
    }
];
var appRoutes = defaultRoutes.concat(eventsRoutes, parentRoutes, jsonRoutes, employeeRoutes, homeRoutes);
exports.rounting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map