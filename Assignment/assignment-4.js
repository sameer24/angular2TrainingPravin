console.log('4. Declare a dynamic function which will return a message for a given company name.');


// Create a function that takes two arguments and returns the sum of those arguments
var myFunction = new Function('users', 'salary', 'return users * salary'); 
// Call the function
console.log(myFunction(10,50));

// Create a function that takes two arguments and returns the sum of those arguments
var myCompanyMsg = new Function('msg',  'return msg'); 
// Call the function
console.log(myCompanyMsg('This is Declare a dynamic function'));
