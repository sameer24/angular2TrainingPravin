"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_components_1 = require("./home/components/home.components");
var employee_list_component_1 = require("./employee/components/employee-list.component");
var employee_details_components_1 = require("./employee/components/employee-details.components");
var events_details_component_1 = require("./events/components/events-details.component");
var events_list_component_1 = require("./events/components/events-list.component");
var new_event_component_1 = require("./events/components/new-event.component");
var jph_posts_components_1 = require("./jsonplaceholder/components/jph-posts.components");
var parent_component_1 = require("./parent-child-communication/compononents/parent.component");
var appRoutes = [
    { path: 'home', component: home_components_1.HomeComponent },
    { path: 'employee', component: employee_list_component_1.EmployeeListComponent },
    { path: 'employee/:id', component: employee_details_components_1.EmployeeDetailsComponent },
    { path: 'events/:id', component: events_details_component_1.EventsDetailsComponent },
    { path: 'newevent', component: new_event_component_1.NewEventComponent },
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'posts', component: jph_posts_components_1.JphPostComponent },
    { path: 'parent-child', component: parent_component_1.ParentComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
exports.rounting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map