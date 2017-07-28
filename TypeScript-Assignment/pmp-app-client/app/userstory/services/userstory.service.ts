import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { UserStory } from "../models/userstory";

@Injectable()

export class UserStoryService{
    constructor(private _http:Http){

    }
    getAllUserStory():Observable<UserStory[]> {
       return this._http.get("http://localhost:8005/userstory").map(res => res.json());
    }

    private employee: UserStory[];
}