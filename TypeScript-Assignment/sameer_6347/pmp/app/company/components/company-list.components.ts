
import { Component, OnInit } from "@angular/core";
import { Company } from "../models/company";

import { CompanyService } from "../services/company-service"



@Component({
    selector: 'company-list',
    templateUrl: 'app/company/views/company-list.component.html',
    styleUrls: ['app/company/css/company.styles.css']
})

export class CompanyListComponents implements OnInit {
    title: string = "Company List";
    company: Company;
    searchLetterContains: string = "";
    searchAddressContains: string = "";
    companies: Company[];

    delete(id: string) {
        this._service.deleteRecord(id).subscribe(
            data => {
                console.log("Deleted");
                this._service.getAll().subscribe(
                    data => this.companies = data
                )

            }
        )
    }

    ngOnInit() {
        this._service.getAll().subscribe(
            data => { this.companies = data; console.log(data); }
        )
    }
    constructor(private _service: CompanyService) {
    }
}