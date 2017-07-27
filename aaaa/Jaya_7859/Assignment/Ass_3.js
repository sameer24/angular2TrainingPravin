
//3. Declare SalesNetProfit function which takes 4 parameters
//  [- [COGS, Expense, ActualSales and ServiceTaxPercentage - default]

let salesNetProfit = (cogs,expence,actualSales,serviceTaxPercentage = 10) => {
    let result = (actualSales - cogs + expence) / serviceTaxPercentage;
    return result;
}

console.log("Sales Net Profit : " + salesNetProfit(1300,5000,80000));

