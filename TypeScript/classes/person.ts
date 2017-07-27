export class Person {
    constructor(public socialID?: number, public personName?: string, public address?: string, public city?: string, public contactNo?: string, public emailID?: string) {

    }
    // socialID: number;
    // personName: string;
    // address: string;
    // city: string
    // contactNo: string
    // emailID: string
    private _country: string;

    set country(country:string){
        this._country=country;
    }
    
    get country() : string {
        return this._country;
    }
    
    printPersonInformation(): void {
        console.log(`Person ID ${this.socialID} name: ${this.personName} Address: ${this.address} City is : ${this.city}
        contact No ${this.contactNo} AND email id is ${this.emailID}  and country is ${this._country}     `)
    }

}