export abstract class SalesCalculation {
    constructor() {
    }
    abstract salesNetProfit(cogs:number,expense:number,actualSales:number):number;
}