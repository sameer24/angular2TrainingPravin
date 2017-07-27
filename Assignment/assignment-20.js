console.log('20. Manipulate a number array using array extensions.');

let numArray = [65,654,89,46,16];

console.log(numArray.findIndex(x => x == 4));
console.log(numArray.concat([15, 20, 450]));
console.log(numArray.filter(x => x > 20));

console.log(numArray.lastIndexOf(65));

console.log(numArray.sort());


