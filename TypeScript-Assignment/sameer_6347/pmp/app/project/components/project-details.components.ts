import { Component, Input,OnInit } from "@angular/core";
import { Project } from "../models/project";
import { ProjectService } from "../services/project-service"
import { ActivatedRoute, Params } from "@angular/router"
import {Location} from "@angular/common"

@Component({
    selector: 'project-details',
    templateUrl: 'app/project/views/project-details.component.html',
     styleUrls:['app/project/css/project.styles.css']
})

export class ProjectDetailsComponent  implements OnInit{
    constructor(private _service: ProjectService, private _route:ActivatedRoute, private _location:Location) {      
    }

    title: string = "Project Details";
    //@Input() id: string;
    project:Project;
     ngOnInit() {
         let id: string;
        this._route.params.subscribe(
            params => id = params["id"]
        );

        this._service.getSingle(id).subscribe(
            data => this.project = data
        )
    } 
}