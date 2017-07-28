import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Userstory } from "../models/us";

@Injectable()

export class UserstoryService {
    constructor(private _http: Http) {
    }
    
    getAll(): Observable<Userstory[]> {
        return this._http.get("http://localhost:8005/userstories").map(res => res.json());
    }

    getSingle(id: string): Observable<Userstory> {
        console.log(id);
        return this._http.get("http://localhost:8005/userstories/" + id).map(res => res.json());
    }
    deleteRecord(id: string) {
        return this._http.delete("http://localhost:8005/userstories/"+id).map(res => res);
    }
}