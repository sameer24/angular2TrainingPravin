
//5. eclare variables which will hold the information about a customer. 
//Declare a JavaScript object which will set the values of the object 
//properties from the above declared variables. Print the object values using template literals.

let customer = {
    custID: 10,
    custName: "Jaya",
    address: {
        streetNo: 123,
        streetName: "ABC Street",
        city: 'Pune',
        zipCode: 411044
    },
    custContactNo: 9890058613,


    printCustomerDetails: () => {
        console.log(`Customer ID ${customer.custID} Customer Name
        ${customer.custName} Customer Address ${customer.address.streetNo} 
         ${customer.address.streetName} ${customer.address.city}  ${customer.address.zipCode}
        Customer ConatctNo  ${customer.custContactNo}`);
    }

}

customer.printCustomerDetails();
