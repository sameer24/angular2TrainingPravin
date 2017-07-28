import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Project } from "../models/project";
import {Location} from "@angular/common"

@Injectable()

export class ProjectService {
    constructor(private _http: Http, private _location:Location) {
    }
    
    getAll(): Observable<Project[]> {
        return this._http.get("http://localhost:8005/projects").map(res => res.json());
    }

    getSingle(id: string): Observable<Project> {
        console.log(id);
        return this._http.get("http://localhost:8005/projects/" + id).map(res => res.json());
    }
    deleteRecord(id: string) {
        return this._http.delete("http://localhost:8005/projects/"+id).map(res => res);
    }
}