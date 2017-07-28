import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Company } from "../models/company";
import { CompanyService } from "../services/company-service"
import { Location } from "@angular/common";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router"

@Component({
    selector: 'new-company',
    templateUrl: 'app/company/views/new-company.component.html',
    styles: ['input.ng-invalid { border-left:3px solid red }', 'input.ng-valid { border-left:3px solid green }'],
    styleUrls: ['app/company/css/company.styles.css']
})

export class NewCompanyComponents implements OnInit, OnChanges {

    constructor(private _serviceCompany: CompanyService, private _location:Location, private _route: ActivatedRoute ) {
    }

    title: string = "New Company";
    newCompany: Company;
    id: string = "";
    //@Input() event: Event;

    ngOnInit() {
        let id: string;
        this._route.params.subscribe(
            params => {
                this.id = params["id"];
                if (this.id) {
                    console.log(this.id);
                    this._serviceCompany.getSingle(this.id).subscribe(
                        data => {
                            console.log(data);
                            this.title = "Edit Company";
                            this.newCompany = new Company();
                            this.newCompany.companyForm = new FormGroup({
                                companyId: new FormControl(data.companyId, Validators.required),
                                companyCode: new FormControl(data.companyCode, [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
                                name: new FormControl(data.name, Validators.required),
                                address: new FormControl(data.address, Validators.required),
                                city: new FormControl(data.city, Validators.required),
                                contact: new FormControl(data.contact, Validators.required),
                                email: new FormControl(data.email, Validators.required),
                            });
                        }
                    )
                } else {
                    this.title = "New Company";
                    this.newCompany = new Company();                    
                }

            }
        );
    }
    insertEvent(): void {
        this.newCompany.companyForm.value.image = "images/noimage.png"

        if (this.title == "Edit Company") {
            console.log("Edit");
            this.newCompany.companyForm.value._id = this.id;
            this._serviceCompany.update(this.newCompany.companyForm.value).subscribe(
                data => {
                    this.newCompany = new Company();
                    console.log("Updated Successfully !")
                    //alert("Updated Successfully !");
                    this._location.back();
                })
        } else {
            this._serviceCompany.insertEvents(this.newCompany.companyForm.value).subscribe(
                data => {
                    this.newCompany = new Company();
                    console.log("Company Added Successfully !")
                       //alert("Company Added Successfully !");
                       this._location.back();
                })
        }

    }

    ngOnChanges() {
        // this.newEvent = this.event;
    }

    // insertEvent(): void {
    //     this.newCompany.companyForm.value.image = "images/noimage.png"
    //     this._serviceCompany.insertEvents(this.newCompany.companyForm.value).subscribe(
    //         data => {
    //             this.newCompany = new Company();
    //             console.log("Company Added Successfully !")
    //         }
    //     )
    // }
}