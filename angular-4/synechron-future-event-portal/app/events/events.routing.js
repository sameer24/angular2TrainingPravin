"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var events_details_component_1 = require("./components/events-details.component");
var events_list_component_1 = require("./components/events-list.component");
var new_event_component_1 = require("./components/new-event.component");
var eventsRouteConfig = [
    {
        path: '',
        component: events_list_component_1.EventsListComponent
    },
    {
        path: 'new',
        component: new_event_component_1.NewEventComponent
    },
    {
        path: ':id',
        component: events_details_component_1.EventsDetailsComponent
    }
];
exports.eventRouting = router_1.RouterModule.forChild(eventsRouteConfig);
//# sourceMappingURL=events.routing.js.map