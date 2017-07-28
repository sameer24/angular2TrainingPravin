"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = (function () {
    function Task(TaskID, Title, Description, UserStoryId, Status, TaskStartDate, TaskUpdatedDate, AssignedToEmp) {
        this.TaskID = TaskID;
        this.Title = Title;
        this.Description = Description;
        this.UserStoryId = UserStoryId;
        this.Status = Status;
        this.TaskStartDate = TaskStartDate;
        this.TaskUpdatedDate = TaskUpdatedDate;
        this.AssignedToEmp = AssignedToEmp;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map