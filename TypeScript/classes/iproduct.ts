interface IProduct{
    id:number;
    productName:string;
    companyName:string;
    blackList?:boolean;
    reason:string;
    blackListProduct?:(productID:number, reasone:string)=>boolean;
    getAllProduct:(companyName:string)=>string[];
}

class SynechronProducts implements IProduct{
    id:number;
    productName:string;
    companyName:string;
    blackList:boolean;
    reason:string;
    getAllProduct(companyName:string):string[] {
        return;
    }
    test(t:string){

    }
}

let product:IProduct = new SynechronProducts();

let productObject : IProduct = {
    id:50,
    productName:'ABC',
    companyName:'sfsdaf ',
    blackList:true,
    reason:'sssss',
    getAllProduct(companyName:string):string[] {
        return;
    }
}

function printProductInformation(city:string,product:string):void {
    
}


printProductInformation('Pune','ABC');
