"use strict";
// console.log('This file holds main module which will load all the depending module')
Object.defineProperty(exports, "__esModule", { value: true });
var generic_repository_with_constraint_1 = require("./classes/generic-repository-with-constraint");
var employee_1 = require("./classes/employee");
var employee = new generic_repository_with_constraint_1.SynechronGenericRepository();
employee.addNew(new employee_1.Employee(1, 'Sameer', 'Sameer', 'Pune'));
employee.addNew(new employee_1.Employee(2, 'Sameer 1', 'Sameer 1', 'Pune 1'));
employee.addNew(new employee_1.Employee(3, 'Sameer 2', 'Sameer2', 'Pune 2'));
console.log(employee);
for (var _i = 0, _a = employee.getAll(); _i < _a.length; _i++) {
    var emp = _a[_i];
    console.log(emp);
}
//# sourceMappingURL=main.js.map