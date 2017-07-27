import { Component } from "@angular/core";

import { Events } from "../models/events";

import { EventsService } from "../services/events.service";

@Component({
    selector: 'event-list',
    templateUrl: 'app/events/views/events-list.component.html',
    styleUrls:['app/events/css/events.styles.css'],
})

export class EventsListComponent {
    title: string = 'Event List';
    subTitle: string = 'Published by Synechron';
    selectedEvent: Events;
    searchLetter: string = '';
    searchLetterStartsWith: string = '';
    searchEndsWith: string = '';
    searchDateStartsWith: string ='';
    
    sendEventDetails(event: Events): void {
        this.selectedEvent = event;
        this.receivedChildMessage ='';
    }
    receivedChildMessage:string='';
    receivedMessage(msg:string):void{
        this.receivedChildMessage = msg;
    }

    constructor(private _eventsService:EventsService) {
        // this.event = new Events(1,'SYNQ3',' JQUERY 3','Introduction to ',new Date(),new Date(),100, 50, 'images/jquery.png')
        //this.events = _eventsService.getAllEvents();

        this._eventsService.getAllEvents().subscribe(
            data=>{
                this.events=data
            },
            err=>console.log(err),()=>console.log('completed'));

    }
    events: Events[];
}