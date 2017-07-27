//15.Perform a test on number array and check if the
// number is integer or float. Use rest parameter.

// in for loop - in returns index and of returns value
let numberArray = [1, 50.6, 89, 66, 20.36, 45, 96.2];

function showNumberDataType(...numberArray) {
    for (let num of numberArray) {
        let numberType = Number.isInteger(num) ? 'Interger Number' : 'Float number';
        console.log(`${num} is : ${numberType}`);
    }
    return 'Success';
}
//showNumberDataType(...numberArray);
console.log(showNumberDataType(...numberArray));
