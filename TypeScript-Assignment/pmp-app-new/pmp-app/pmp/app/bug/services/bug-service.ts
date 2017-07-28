import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Bug } from "../models/bug";

@Injectable()

export class BugService {
    constructor(private _http: Http) {
    }
    
    getAll(): Observable<Bug[]> {
        return this._http.get("http://localhost:8005/bugs").map(res => res.json());
    }

    getSingle(id: string): Observable<Bug> {
        console.log(id);
        return this._http.get("http://localhost:8005/bugs/" + id).map(res => res.json());
    }    
     deleteRecord(id: string) {
        return this._http.delete("http://localhost:8005/bugs/"+id).map(res => res);
    }
}