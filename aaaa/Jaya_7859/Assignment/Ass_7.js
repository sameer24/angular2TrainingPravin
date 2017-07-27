
//7. De structure  companyNames array. 
//Use spread operator to print the last 3 values.
// Create a function using de structure syntax and print first two company names.

let companyNames = ['Synechon', 'IBM', 'TCS', 'Bitwise', 'Microsoft'];

let [comp1, comp2, comp3, comp4, comp5] = companyNames;
console.log(`Company 1 : ${comp1} 
             Company2: ${comp3}
             Company3: ${comp4} 
             Company 5 : ${comp5}`);

//2nd part is pending
let [, , ...cList] = companyNames;
console.log(`Last 3 Company Names are : ${cList} `);

function displayComanyName(...companyNames) {
    let [company1, company2] = companyNames;
    console.log(`First 2 comapny Names are : ${company1} 
    ${company2}`);
}

displayComanyName(...companyNames);

