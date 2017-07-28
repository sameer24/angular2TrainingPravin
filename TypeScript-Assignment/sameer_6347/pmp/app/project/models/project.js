"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = (function () {
    function Project(projectId, projectCode, projectGroup, name, startDate, endDate, completionPercentage, _id) {
        this.projectId = projectId;
        this.projectCode = projectCode;
        this.projectGroup = projectGroup;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.completionPercentage = completionPercentage;
        this._id = _id;
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.js.map