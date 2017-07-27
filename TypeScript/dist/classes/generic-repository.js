"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericRepository = (function () {
    function GenericRepository() {
        this._items = new Array();
    }
    GenericRepository.prototype.getAll = function () {
        return this._items;
    };
    ;
    GenericRepository.prototype.getSingle = function (id) {
        //Add logic for finding Singel Item
        return this._items[0];
    };
    ;
    GenericRepository.prototype.addNew = function (T) {
        this._items.push(T);
    };
    ;
    GenericRepository.prototype.update = function (T) {
        console.log('Item Updatedddddddddddd');
    };
    ;
    GenericRepository.prototype.delete = function (T) {
        this._items.pop();
    };
    ;
    return GenericRepository;
}());
exports.GenericRepository = GenericRepository;
//# sourceMappingURL=generic-repository.js.map