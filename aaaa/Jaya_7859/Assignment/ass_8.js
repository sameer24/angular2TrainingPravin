

//8. De structure customer object by aliasing the property names.

let objCustomer={
    customerNo: 789,
    customerName:"Jaya Sonje",
    contactNo : 7896541233,
    email : "testuser@gmail.com"
}

let { customerNo :cNo,customerName:name,contactNo:no,email:mail} = objCustomer;

console.log(`Customer Details : Customer No: ${cNo}
Customer Name ${name} 
Cotact No ${no} 
Email ${mail}`);