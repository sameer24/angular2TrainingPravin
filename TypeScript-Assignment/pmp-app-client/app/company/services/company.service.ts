import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Company } from "../models/company";

@Injectable()

export class CompanyService{
    constructor(private _http:Http){

    }
    getAllCompany():Observable<Company[]> {
       return this._http.get("http://localhost:8005/company").map(res => res.json());
    }

    private company: Company[];
}