console.log ('15. Perform a test on number array and check if the number is integer or float. Use rest parameter.');
//15.Perform a test on number array and check if the number is integer or float. Use rest parameter.

let mixArr = [1, 50.6, 89, 66, 20.36, 45, 96.2];

function showNumberType(...mixArr) {
    for (let num of mixArr) {
        let numType = Number.isInteger(num) ? 'Interger Number' : 'Float number';
        console.log(`${num} is : ${numType}`);
    }
    return 'Success';
}

console.log(showNumberType(...mixArr));