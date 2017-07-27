"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sales_abstract_class_1 = require("./sales.abstract.class");
var IndiaSales = (function (_super) {
    __extends(IndiaSales, _super);
    function IndiaSales() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndiaSales.prototype.salesNetProfit = function (cogs, expense, actualSales) {
        return actualSales - expense;
    };
    return IndiaSales;
}(sales_abstract_class_1.SalesCalculation));
exports.IndiaSales = IndiaSales;
//# sourceMappingURL=india-sales.js.map