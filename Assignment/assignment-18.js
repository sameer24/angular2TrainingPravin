console.log('18. Print class name and function name.');

class PrintClassName{

    ShowFunctionName(){

    }
}

let pClass = new PrintClassName;

console.log("Class Name : "+PrintClassName.name);
console.log("Function Name : "+pClass.ShowFunctionName.name);