

//13.	Create a module which will export mathematical functions using object.
// Consume the module to perform the operations in a module called SalesModule.

import { Calculator } from './calculate'

var mathOperation = new Calculator();

console.log('Addition of Two Numbers is :' + addNumbers(100, 300));
console.log('Substraction of two Numbers is : ' + subtractNumber(400 - 200));
console.log('Multiplication of two Numbers is : ' + multiplication(400 * 200));
console.log('Division of two Numbers is : ' + division(400 / 200));

