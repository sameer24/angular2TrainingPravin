import { IPerson } from "./iperson";
export class SynechronGenericRepository<T extends IPerson>  {
    private _peopel:Array<T> = new Array<T>();

     getAll():Array<T>{
        return this._peopel;
    }; 

    getSingle(id:number):T{
        //Add logic for finding Singel Item
        return this._peopel[0];
    };

    addNew(T:T):void{
        this._peopel.push(T);
    };
    update(T:T):void{
        console.log('Item Updatedddddddddddd');
    };
    delete(T:T):void{
        this._peopel.pop();
    };
}