
//14.	Find ASP.NET keyword in a given string -
//"Microsoft offers number of web technologies line ASP.NET, MVC, etc.". 
//Also implement a search for starting and ending of the characters.


let objSearchString = 'Microsoft offers number of web technologies line ASP.NET, MVC, etc.';

console.log(objSearchString.includes('ASP'));
console.log(objSearchString.includes('MVC'));
console.log(objSearchString.startsWith('Microsoft'));
console.log(objSearchString.endsWith('etc.'));