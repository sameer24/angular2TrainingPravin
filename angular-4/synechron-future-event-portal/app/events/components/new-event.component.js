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
var events_1 = require("../models/events");
var NewEventComponent = (function () {
    function NewEventComponent(_EventService) {
        this._EventService = _EventService;
        this.title = 'New Event Form';
        this.subTitle = 'SubTitle New Event';
    }
    NewEventComponent.prototype.ngOnInit = function () {
        this.newEvent = new events_1.Events();
        this.newEvent.logo = 'images/node.png';
    };
    NewEventComponent.prototype.insertEvent = function () {
        var _this = this;
        this._EventService.insertEvents(this.newEvent.eventForm.value).subscribe(function (data) {
            _this.newEvent = new events_1.Events();
            console.log('Eent Added Successfully');
        });
    };
    return NewEventComponent;
}());
NewEventComponent = __decorate([
    core_1.Component({
        selector: 'new-event',
        templateUrl: 'app/events/views/new-event.component.html',
        styles: ['input.ng-invalid {border-left:3px solid red}', 'input.ng-valid {border-left:0px solid green}']
    }),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], NewEventComponent);
exports.NewEventComponent = NewEventComponent;
//# sourceMappingURL=new-event.component.js.map