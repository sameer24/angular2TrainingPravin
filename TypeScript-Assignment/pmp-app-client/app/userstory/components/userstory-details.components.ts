import { Component,Input,OnChanges } from "@angular/core";

import { UserStory } from "../models/userstory";


@Component({
    selector:'userstory-detail',
    templateUrl:'app/userstory/views/userstory-details.component.html',
    styleUrls:['app/userstory/css/userstory.styles.css']
})

export class UserStoryDetailsComponent implements OnChanges{
    title:'userstory Details';
    showDetail:boolean
    constructor(){
         //this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/node.png',10)         
          this.showDetail=true;
    }
    ngOnChanges():void{
         this.showDetail=true;
    }
    
    @Input() userstory: UserStory;
}