export interface IGenericRepository<T>{
    getAll():Array<T>;
    getSingle(id:number):T;
    addNew(T:T):void;
    update(T:T):void;
    delete(T:T):void;
}