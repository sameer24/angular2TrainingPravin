import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Events } from "../models/events";
import { ActivatedRoute, Params } from "@angular/router"

import { EventsService } from "../services/events.service";

@Component({
    selector: 'event-details',
    templateUrl: 'app/events/views/envents-details.component.html',
    styleUrls: ['app/events/css/events.styles.css'],
})

export class EventsDetailsComponent {
    title: 'Event Details';
    selectedEvent: Events;
    constructor(private _EventsService: EventsService, private _route: ActivatedRoute) {
        //this.event = new Events(1,'SYNQ3',' JQUERY 3','Introduction to ', new Date(),new Date(),100, 50, 'images/jquery.png')
    }
    @Input() event: Events;
    @Output() sendMessageToParent: EventEmitter<string> = new EventEmitter<string>()
    raiseEvent(): void {
        this.sendMessageToParent.emit('This message is sent by child')
    }

    ngOnInit() {
        let id: string;
        this._route.params.subscribe(
            params => id = params["id"]
        );

        this._EventsService.getSingleEvent(id).subscribe(
            data => {
                this.selectedEvent = data
            }
        )

    }


}