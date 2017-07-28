import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Bug } from "../models/bug";

@Injectable()

export class BugService{
    constructor(private _http:Http){

    }
    getAllBug():Observable<Bug[]> {
       return this._http.get("http://localhost:8005/bug").map(res => res.json());
    }

    private bug: Bug[];
}