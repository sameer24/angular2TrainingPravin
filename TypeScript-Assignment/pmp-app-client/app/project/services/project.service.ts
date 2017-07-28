import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Project } from "../models/project";

@Injectable()

export class ProjectService{
    constructor(private _http:Http){

    }
    getAllProject():Observable<Project[]> {
       return this._http.get("http://localhost:8005/project").map(res => res.json());
    }

    private project: Project[];
}