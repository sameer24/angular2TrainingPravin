import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Events {
    constructor(public eventID?: number, public eventCode?: string, public eventName?: string,
        public description?: string, public startDate?: Date, public endDate?: Date, public fees?: number,
        public totalRegistration?: number, public logo?: string) {
    }
    eventForm: FormGroup = new FormGroup({
        eventID: new FormControl("", Validators.required),
        enventCode: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
        eventName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        description: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        startDate: new FormControl(new Date(), [Validators.required]),
        endDate: new FormControl(new Date(), [Validators.required]),
        fees: new FormControl("", [Validators.required]),
        totalRegistration: new FormControl("", [Validators.required])
    });  
}