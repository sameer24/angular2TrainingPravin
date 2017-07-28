import { NgModule } from "@angular/core";
import { CompanyListComponents } from "./components/company-list.components";
import { CompanyDetailsComponent } from "./components/company-details.components";
import { NewCompanyComponents } from "./components/new-company.components";

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { CompanyService } from "./services/company-service";
import { FilterContains } from "../contains.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule],
    declarations: [CompanyListComponents, CompanyDetailsComponent, NewCompanyComponents, FilterContains],
    bootstrap: [],
    exports: [CompanyListComponents, NewCompanyComponents],
    providers: [CompanyService]
})


export class CompanyModule {

}