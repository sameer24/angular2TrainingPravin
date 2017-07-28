export class Project {
    constructor(public projectId: number,
        public projectCode?: string,        
        public projectGroup?:string,
        public name?: string,      
        public startDate?: Date,    
        public endDate?:Date,   
        public completionPercentage?: number,
        public _id?: string,
    ) {
    }
}