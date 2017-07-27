//2. Declare an arrow function for SalesNetProfit which 
//takes 3 parameters - [COGS, Expense, ActualSales] and test the same.

let salesProfit = (cogs,expences,actualSales) => {
        var result = actualSales - cogs + expences;
        return result;         
}

console.log("Actual Sales Profit : "  + salesProfit(1300,5000,80000) );

