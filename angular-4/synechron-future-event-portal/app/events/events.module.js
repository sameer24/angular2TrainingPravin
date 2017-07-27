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
var forms_1 = require("@angular/forms");
var common_2 = require("@angular/common");
var events_list_component_1 = require("./components/events-list.component");
var events_details_component_1 = require("./components/events-details.component");
var new_event_component_1 = require("./components/new-event.component");
//Pipes
var first_letter_capital_pipe_1 = require("./pipes/first-letter-capital.pipe");
var filter_by_pipe_1 = require("./pipes/filter-by.pipe");
var start_with_pipe_1 = require("./pipes/start-with.pipe");
var ends_with_pipe_1 = require("./pipes/ends-with.pipe");
var date_with_pipe_1 = require("./pipes/date-with.pipe");
//Services
var events_service_1 = require("./services/events.service");
var EventsModule = (function () {
    function EventsModule() {
    }
    return EventsModule;
}());
EventsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        exports: [events_list_component_1.EventsListComponent, new_event_component_1.NewEventComponent],
        declarations: [events_list_component_1.EventsListComponent, events_details_component_1.EventsDetailsComponent, first_letter_capital_pipe_1.FirstLetterCapitalPipe, filter_by_pipe_1.FilterByPipe,
            start_with_pipe_1.StartsWith, ends_with_pipe_1.EndsWith,
            date_with_pipe_1.DateStartsWith, new_event_component_1.NewEventComponent,
        ],
        providers: [events_service_1.EventsService, common_2.DatePipe],
    })
], EventsModule);
exports.EventsModule = EventsModule;
//# sourceMappingURL=events.module.js.map