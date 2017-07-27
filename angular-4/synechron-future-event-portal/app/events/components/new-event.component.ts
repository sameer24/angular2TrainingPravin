import { Component, OnInit } from '@angular/core';

import { EventsService } from "../services/events.service";
import { Events } from "../models/events";


@Component({
    selector: 'new-event',
    templateUrl: 'app/events/views/new-event.component.html',
    styles:['input.ng-invalid {border-left:3px solid red}','input.ng-valid {border-left:0px solid green}']

})

export class NewEventComponent implements OnInit {
    constructor(private _EventService:EventsService) { 
        
    }
    title : string = 'New Event Form';
    subTitle : string ='SubTitle New Event';
    newEvent:Events;

    ngOnInit() { 
        this.newEvent = new Events()
        this.newEvent.logo ='images/node.png';
    }

    insertEvent():void{        
        this._EventService.insertEvents(this.newEvent.eventForm.value).subscribe(
            data=>{
                this.newEvent = new Events()
                console.log('Eent Added Successfully')
            }
        )
    }
}