"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var Events = (function () {
    function Events(eventID, eventCode, eventName, description, startDate, endDate, fees, totalRegistration, logo) {
        this.eventID = eventID;
        this.eventCode = eventCode;
        this.eventName = eventName;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.fees = fees;
        this.totalRegistration = totalRegistration;
        this.logo = logo;
        this.eventForm = new forms_1.FormGroup({
            eventID: new forms_1.FormControl("", forms_1.Validators.required),
            enventCode: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(5)]),
            eventName: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(50)]),
            description: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(50)]),
            startDate: new forms_1.FormControl(new Date(), [forms_1.Validators.required]),
            endDate: new forms_1.FormControl(new Date(), [forms_1.Validators.required]),
            fees: new forms_1.FormControl("", [forms_1.Validators.required]),
            totalRegistration: new forms_1.FormControl("", [forms_1.Validators.required])
        });
    }
    return Events;
}());
exports.Events = Events;
//# sourceMappingURL=events.js.map