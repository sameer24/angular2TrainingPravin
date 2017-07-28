import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Task } from "../models/task";

@Injectable()

export class TaskService{
    constructor(private _http:Http){

    }
    getAllTask():Observable<Task[]> {
       return this._http.get("http://localhost:8005/tasks").map(res => res.json());
    }

    private task: Task[];
}