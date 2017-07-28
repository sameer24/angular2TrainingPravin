import { Component } from "@angular/core";

import { UserStory } from "../models/userstory";
import { UserStoryService } from "../services/userstory.service";

@Component({
    selector:'userstory-list',
    templateUrl:'app/userstory/views/userstory-list.component.html'
})

export class UserStoryListComponent{
    title:string = 'userstory List 1';
    subTitle:string = 'Published by 1 Synechron';
    selectedEmployee: UserStory;
    showEmployee(emp:UserStory):void{
        this.selectedEmployee = emp;
    }
    hideDetail():void{
        this.selectedEmployee = '';
    }
    constructor(private _UserStoryService:UserStoryService){
      //  this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/photo.png',10)
      this._UserStoryService.getAllUserStory().subscribe(
          data=>{
                console.log(data);
                this.userstory=data
            },
            err=>console.log(err),()=>{console.log('completed')});
    }
   
    userstory: UserStory[];
}