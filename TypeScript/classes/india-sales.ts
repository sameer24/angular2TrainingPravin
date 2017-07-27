import { SalesCalculation } from "./sales.abstract.class";
export class IndiaSales extends SalesCalculation{
    salesNetProfit(cogs:number,expense:number,actualSales:number):number
    {
        return actualSales-expense;
    }
}