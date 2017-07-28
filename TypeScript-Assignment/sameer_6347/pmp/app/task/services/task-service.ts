import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Task } from "../models/Task";

@Injectable()

export class TaskService {
    constructor(private _http: Http) {
    }
    
    getAll(): Observable<Task[]> {
        return this._http.get("http://localhost:8005/tasks").map(res => res.json());
    }

    getSingle(id: string): Observable<Task> {
        console.log(id);
        return this._http.get("http://localhost:8005/tasks/" + id).map(res => res.json());
    }
    deleteRecord(id: string) {
        return this._http.delete("http://localhost:8005/tasks/"+id).map(res => res);
    }

}