console.log('9. Declare a function which will take companyNames using rest parameters and print number of companies  passed the function.')

//9. Declare a function which will take companyNames using rest parameters and print number of companies  
//passed the function.

function acceptCompanyName(...companyNames){
    for(let i=0;i<companyNames.length;i++){
        console.log('companyNames : '+companyNames[i])
    }

    for(let cmp of companyNames){
        console.log('companyNames : '+cmp)
    }
}


acceptCompanyName('a','b','c');