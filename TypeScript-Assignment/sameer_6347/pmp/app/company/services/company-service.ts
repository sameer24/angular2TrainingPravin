import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Company } from "../models/company";

@Injectable()

export class CompanyService {
    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
    }

    private headers: Headers;

    getAll(): Observable<Company[]> {
        return this._http.get("http://localhost:8005/companies").map(res => res.json());
    }


    deleteRecord(id: string) {
        return this._http.delete("http://localhost:8005/companies/" + id).map(res => res);
    }

    getSingle(id: string): Observable<Company> {
        return this._http.get("http://localhost:8005/companies/" + id).map(res => res.json());
    }

    insertEvents(event: Event) {
        return this._http.post("http://localhost:8005/companies", JSON.stringify(event), {
            headers: this.headers
        }).map(res => res);
    }

    update(event: Company) {
        return this._http.put("http://localhost:8005/companies", JSON.stringify(event), {
            headers: this.headers
        }).map(res => res);
    }

}