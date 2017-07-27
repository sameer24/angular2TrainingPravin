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
var events_service_1 = require("../services/events.service");
var EventsListComponent = (function () {
    function EventsListComponent(_eventsService) {
        // this.event = new Events(1,'SYNQ3',' JQUERY 3','Introduction to ',new Date(),new Date(),100, 50, 'images/jquery.png')
        //this.events = _eventsService.getAllEvents();
        var _this = this;
        this._eventsService = _eventsService;
        this.title = 'Event List';
        this.subTitle = 'Published by Synechron';
        this.searchLetter = '';
        this.searchLetterStartsWith = '';
        this.searchEndsWith = '';
        this.searchDateStartsWith = '';
        this.receivedChildMessage = '';
        this._eventsService.getAllEvents().subscribe(function (data) {
            _this.events = data;
        }, function (err) { return console.log(err); }, function () { return console.log('completed'); });
    }
    EventsListComponent.prototype.sendEventDetails = function (event) {
        this.selectedEvent = event;
        this.receivedChildMessage = '';
    };
    EventsListComponent.prototype.receivedMessage = function (msg) {
        this.receivedChildMessage = msg;
    };
    return EventsListComponent;
}());
EventsListComponent = __decorate([
    core_1.Component({
        selector: 'event-list',
        templateUrl: 'app/events/views/events-list.component.html',
        styleUrls: ['app/events/css/events.styles.css'],
    }),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], EventsListComponent);
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map