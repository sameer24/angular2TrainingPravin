import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Employee } from "../models/employee";


@Injectable()

export class EmployeeService {
   constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
    }

        private headers: Headers;

    getAll(): Observable<Employee[]> {
        return this._http.get("http://localhost:8005/employees").map(res => res.json());
    }

    getSingle(id: string): Observable<Employee> {
        console.log(id);
        return this._http.get("http://localhost:8005/employees/" + id).map(res => res.json());
    }

    insertEmployee(employee: Employee) {
        console.log(employee);
        return this._http.post("http://localhost:8005/employees", JSON.stringify(employee), {
            headers: this.headers
        }).map(res=>res);
    }
 
    deleteRecord(id: string) {
        return this._http.delete("http://localhost:8005/employees/"+id).map(res => res);
    }
    update(employee: Employee) {
        console.log(employee);
        return this._http.put("http://localhost:8005/employees", JSON.stringify(employee), {
            headers: this.headers
        }).map(res => res);

    }
    
}