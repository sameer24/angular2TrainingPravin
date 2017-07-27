"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person(socialID, personName, address, city, contactNo, emailID) {
        this.socialID = socialID;
        this.personName = personName;
        this.address = address;
        this.city = city;
        this.contactNo = contactNo;
        this.emailID = emailID;
    }
    Object.defineProperty(Person.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (country) {
            this._country = country;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.printPersonInformation = function () {
        console.log("Person ID " + this.socialID + " name: " + this.personName + " Address: " + this.address + " City is : " + this.city + "\n        contact No " + this.contactNo + " AND email id is " + this.emailID + "  and country is " + this._country + "     ");
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map