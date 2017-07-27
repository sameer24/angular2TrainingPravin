class Person{
    constructor(){
        this.contactName='';
        this.address='';
        this.city='';
    }
    printPersonInformation(){
        console.log(`Person Name is ${this.contactName}, address is ${this.address}, city is ${this.city}`);
    }
}

module.exports.personObject = new Person();