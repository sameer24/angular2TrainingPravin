import { Injectable } from "@angular/core";
import { Http,Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Events } from "../models/events";

@Injectable()

export class EventsService{
    private headers:Headers;
    constructor(private _http:Http){
        this.headers = new Headers()
        this.headers.append("Content-Type","application/json")
    }
    getAllEvents():Observable<Events[]> {
       return this._http.get("http://localhost:8055/api/events").map(res => res.json());
    }

    insertEvents(event:Events) {
       return this._http.post("http://localhost:8055/api/events", JSON.stringify(event),{
           headers:this.headers
       }).map(res => res.json());
    }


    private events: Events[];
    /* = [
        {
        eventID: 1,
        eventCode: 'SYNQ1',
        eventName: 'JQUERY - 3',
        description: 'Introduction To Jquery',
        startDate: new Date(),
        endDate: new Date(),
        totalRegistration: 100,
        fees: 50,
        logo: 'images/jquery.png'
    },
    {
        eventID: 2,
        eventCode: 'SYNQ2',
        eventName: 'Angular',
        description: 'Introduction To Angular',
        startDate: new Date(),
        endDate: new Date(),
        totalRegistration: 80,
        fees: 60,
        logo: 'images/angular.png'
    },
    {
        eventID: 3,
        eventCode: 'SYNQ3',
        eventName: 'JQUERY - 3',
        description: 'Introduction To Jquery',
        startDate: new Date(),
        endDate: new Date(),
        totalRegistration: 90,
        fees: 50,
        logo: 'images/jquery.png'
    },
    {
        eventID: 4,
        eventCode: 'SYNQ4',
        eventName: 'TypeScript - 4',
        description: 'Introduction To TypeScript',
        startDate: new Date(),
        endDate: new Date(),
        totalRegistration: 100,
        fees: 50,
        logo: 'images/ts.jpg'
    },
    {
        eventID: 5,
        eventCode: 'SYNQ5',
        eventName: 'Node - 5',
        description: 'Node BAsic To Jquery',
        startDate: new Date(),
        endDate: new Date(),
        totalRegistration: 100,
        fees: 50,
        logo: 'images/node.png'
    }
    ]
    */

}