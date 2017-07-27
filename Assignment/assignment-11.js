console.log('11. Print your company name using spread operator.');

//11. Print your company name using spread operator.

let company = [{
    title: 'Cmp 1',city:'pune'},
    {title: 'Cmp 2',city:'Mumbai'},
    {title: 'Cmp 3',city:'Satara'}
    ];

for (let {title: n, city: c} of company) {
  console.log('Company Name: ' + n + ', City: ' + c);
}