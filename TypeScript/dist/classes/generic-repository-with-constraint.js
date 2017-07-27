"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SynechronGenericRepository = (function () {
    function SynechronGenericRepository() {
        this._peopel = new Array();
    }
    SynechronGenericRepository.prototype.getAll = function () {
        return this._peopel;
    };
    ;
    SynechronGenericRepository.prototype.getSingle = function (id) {
        //Add logic for finding Singel Item
        return this._peopel[0];
    };
    ;
    SynechronGenericRepository.prototype.addNew = function (T) {
        this._peopel.push(T);
    };
    ;
    SynechronGenericRepository.prototype.update = function (T) {
        console.log('Item Updatedddddddddddd');
    };
    ;
    SynechronGenericRepository.prototype.delete = function (T) {
        this._peopel.pop();
    };
    ;
    return SynechronGenericRepository;
}());
exports.SynechronGenericRepository = SynechronGenericRepository;
//# sourceMappingURL=generic-repository-with-constraint.js.map