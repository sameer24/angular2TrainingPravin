import { IGenericRepository } from "./igeneric-repository";

export class GenericRepository<T> implements IGenericRepository<T>{
    private _items : Array<T>=new Array<T>();
    
    getAll():Array<T>{
        return this._items;
    }; 

    getSingle(id:number):T{
        //Add logic for finding Singel Item
        return this._items[0];
    };

    addNew(T:T):void{
        this._items.push(T);
    };
    update(T:T):void{
        console.log('Item Updatedddddddddddd');
    };
    delete(T:T):void{
        this._items.pop();
    };
}