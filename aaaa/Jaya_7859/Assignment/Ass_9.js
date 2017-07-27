
//9. Declare a function which will take companyNames using rest 
//parameters and print number of companies  passed the function.

function showCompanyNames(...companyNames){
    for (let company of companyNames)
    {
        console.log(company);
    }
}

let companyNames = ['Synechon','IBM','TCS','Bitwise','Microsoft'];
console.log(showCompanyNames(...companyNames));
