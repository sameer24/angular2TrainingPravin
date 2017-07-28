import { Component } from "@angular/core";

import { Project } from "../models/Project";
import { ProjectService } from "../services/Project.service";

@Component({
    selector:'project-list',
    templateUrl:'app/project/views/project-list.component.html'
})

export class ProjectListComponent{
    title:string = 'project List 1';
    subTitle:string = 'Published by 1 Synechron';
    selectedProject: Project;
    showProject(prj:Project):void{
        this.selectedProject = prj;
    }
    hideDetail():void{
        this.selectedProject = '';
    }
    constructor(private _ProjectService:ProjectService){
      //  this.employee = new Employee(1,'Sameer','Kelkar ', 'Job Desc','Address','123456789', new Date(),new Date(),100, 50, 'images/photo.png',10)
      this._ProjectService.getAllProject().subscribe(
          data=>{
                console.log(data);
                this.project=data
            },
            err=>console.log(err),()=>{console.log('completed')});
    }
   
    project: Project[];
}