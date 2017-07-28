import { FormGroup, FormControl, Validators } from "@angular/forms";
export class Employee {
    constructor(
        public employeeId?: string,
        public employeeCode?: string,
        public name?: string,
        public address?: string,
        public city?: string,
        public contact?: string,
        public email?: string,
        public designation?: string,        
        public rating?: string,
        public _id?: string,
    ) {
    }

    employeeForm: FormGroup = new FormGroup({
        employeeId: new FormControl("000", Validators.required),
        employeeCode: new FormControl("SY", [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
        name: new FormControl("-", Validators.required),
        address: new FormControl("-", Validators.required),
        city: new FormControl("-", Validators.required),
        contact: new FormControl("-", Validators.required),
        email: new FormControl(0, Validators.required),
        designation: new FormControl(0, Validators.required),
        rating: new FormControl(0, Validators.required)
    });

   image:string;



}