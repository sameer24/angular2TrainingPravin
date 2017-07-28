
import { Component, OnInit } from "@angular/core";
import { Project } from "../models/project";
import { ProjectService } from "../services/project-service"
import { ActivatedRoute, Params } from "@angular/router"

@Component({
    selector: 'project-list',
    templateUrl: 'app/project/views/project-list.component.html',
    styleUrls: ['app/project/css/project.styles.css']
})

export class ProjrctListComponents implements OnInit {
    title: string = "Project List";
    project: Project;
    searchLetterContains: string = "";
    projects: Project[];
    ngOnInit() {
        this._service.getAll().subscribe(
            data => this.projects = data
        )
    }
    delete(id: string) {
        this._service.deleteRecord(id).subscribe(
            data => {
                console.log("Deleted");
                this._service.getAll().subscribe(
                    data => this.projects = data
                )
            }
        )
    }
    constructor(private _service: ProjectService) {
    }
}