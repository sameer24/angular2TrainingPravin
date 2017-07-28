import { Component, Input, OnInit } from "@angular/core";
import { Company } from "../models/company";
import { CompanyService } from "../services/company-service"
import { ActivatedRoute, Params } from "@angular/router"


@Component({
    selector: 'company-details',
    templateUrl: 'app/company/views/company-details.component.html',
    styleUrls: ['app/company/css/company.styles.css']
})

export class CompanyDetailsComponent implements OnInit {
    constructor(private _service: CompanyService, private _route: ActivatedRoute) {
    }
    title: string = "Company Details";
    // @Input() id: string;

    company: Company;
    ngOnInit() {

        let id: string;
        this._route.params.subscribe(
            params => id = params["id"]
        );

        this._service.getSingle(id).subscribe(
            data => this.company = data
        )
    }
}