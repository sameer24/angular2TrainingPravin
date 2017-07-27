
//Example : 1. Declare variables which can be scoped in loops and conditional statements.

let number1 = 50;
let number2 = 100;


if (number1 > number2)
{
    console.log("Number 1 is greater than Number 2");    
}
else
{
    console.log("Number 2 is greater than Number 1");
}

for (let i=0;i<=2;i++)
{
    let number3 = 5;
    if (i == 1)
    {
        console.log(number1 + number3);
    }
    else
    {
        console.log(number2+ number3);
    }
}

