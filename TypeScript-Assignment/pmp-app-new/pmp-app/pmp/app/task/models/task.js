"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = (function () {
    function Task(id, name, title, description, status, assignedTo, startDate, endDate, _id) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.status = status;
        this.assignedTo = assignedTo;
        this.startDate = startDate;
        this.endDate = endDate;
        this._id = _id;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map