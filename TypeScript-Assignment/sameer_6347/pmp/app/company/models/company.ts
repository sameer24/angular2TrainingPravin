import { FormGroup, FormControl, Validators } from "@angular/forms";
export class Company {
    constructor(public companyId?: number,
        public companyCode?: string,
        public name?: string,      
        public address?:string,
        public city?: string,    
        public contact?:string,
        public email?:string,
        public image?: string,
           public _id?: string,
    ) {
    }


 companyForm: FormGroup = new FormGroup({
        companyId: new FormControl("1000", Validators.required),
        companyCode: new FormControl("Company", [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
        name: new FormControl("-", Validators.required),
        address: new FormControl("-", Validators.required),
        city: new FormControl("-", Validators.required),
        contact: new FormControl("-", Validators.required),
        email: new FormControl(0, Validators.required),        
    });


}