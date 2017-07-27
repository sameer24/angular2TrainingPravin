console.log('1. Declare variables which can be scoped in loops and conditional statements.');

//After declaring a variable, you can give it a value:
var myVariable;
myVariable = 'Santosh';
console.log(myVariable)

//You can do both these operations on the same line if you wish:
var myVariable2='Sameer';
console.log(myVariable2)

//After giving a variable a value, you can later choose to change it:
var myVariable3 = 'Santosh';
myVariable3 = 'Sameer';
console.log(myVariable3)

var myArray = [1,2,'Sameer','Santosh']
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[2])

console.log('The let statement declares a block scope local variable, optionally initializing it to a value.');

function showVar() {
  var x = 10;
  if (true) {
    var x = 20;  // same variable!
    console.log(x);  // 20
  }
  console.log(x);  // 20
}

function showLet() {
  let x = 10;
  if (true) {
    let x = 20;  // different variable
    console.log(x);  // 20
  }
  console.log(x);  // 10
}

showVar();
showLet();

