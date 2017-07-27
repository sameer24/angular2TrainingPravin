console.log('7. De structure  companyNames array. Use spread operator to print the last 3 values. Create a function using de structure syntax and print first two company names.');

//7. De structure  companyNames array. Use spread operator to print the last 3 values. 
//Create a function using de structure syntax and print first two company names.


let company = [{
    title: 'Cmp 1',city:'pune'},
    {title: 'Cmp 2',city:'Mumbai'},
    {title: 'Cmp 3',city:'Satara'}
    ];

let [a,b,c]=company;

console.log('Company Name :'+a.title +' -> City : '+a.city);
console.log('Company Name :'+b.title +' -> City : '+b.city)
console.log('Company Name :'+c.title +' -> City : '+c.city)


for (let {title: n, city: c} of company) {
  console.log('Company Name: ' + n + ', City: ' + c);
}