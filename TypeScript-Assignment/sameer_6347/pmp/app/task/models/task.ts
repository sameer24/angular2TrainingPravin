export class Task {
    constructor(public id: number,
        public name?: string,
        public title?: Date,
        public description?: string,
        public status?: string,
        public assignedTo?: string,
        public startDate?: string,
        public endDate?: string,
        public _id?: string,
    ) {
    }
}