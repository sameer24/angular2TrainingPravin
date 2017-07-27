import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Employee } from "../models/employee";

@Injectable()

export class EmployeeService{
    constructor(private _http:Http){

    }
    getAllEmployee():Observable<Employee[]> {
       return this._http.get("http://localhost:8005/employees").map(res => res.json());
    }

    private employee: Employee[];
}