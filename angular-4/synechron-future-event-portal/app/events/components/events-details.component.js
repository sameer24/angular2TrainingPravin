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
var events_1 = require("../models/events");
var EventsDetailsComponent = (function () {
    function EventsDetailsComponent() {
        this.sendMessageToParent = new core_1.EventEmitter();
        //this.event = new Events(1,'SYNQ3',' JQUERY 3','Introduction to ', new Date(),new Date(),100, 50, 'images/jquery.png')
    }
    EventsDetailsComponent.prototype.raiseEvent = function () {
        this.sendMessageToParent.emit('This message is sent by child');
    };
    return EventsDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", events_1.Events)
], EventsDetailsComponent.prototype, "event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EventsDetailsComponent.prototype, "sendMessageToParent", void 0);
EventsDetailsComponent = __decorate([
    core_1.Component({
        selector: 'event-details',
        templateUrl: 'app/events/views/envents-details.component.html',
        styleUrls: ['app/events/css/events.styles.css'],
    }),
    __metadata("design:paramtypes", [])
], EventsDetailsComponent);
exports.EventsDetailsComponent = EventsDetailsComponent;
//# sourceMappingURL=events-details.component.js.map