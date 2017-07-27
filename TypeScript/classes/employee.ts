import { IPerson } from "./iperson";

export class Employee implements IPerson {
    constructor(public socialID:number, eNAME:string, public name:string,public city:string) {
        
    }
}