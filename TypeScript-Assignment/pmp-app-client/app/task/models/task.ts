
export class Task {
    constructor(
        public TaskID?: number, public Title?: string, public Description?: string,
        public UserStoryId?: string, public Status?: string, public TaskStartDate?: Date, public TaskUpdatedDate?: Date,
        public AssignedToEmp?: string) {

    }
}