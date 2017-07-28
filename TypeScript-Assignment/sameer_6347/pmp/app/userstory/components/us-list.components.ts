
import { Component, OnInit } from "@angular/core";
import { Userstory } from "../models/us";
import { UserstoryService } from "../services/us-service"

@Component({
    selector: 'us-list',
    templateUrl: 'app/userstory/views/us-list.component.html',
    styleUrls: ['app/userstory/css/us.styles.css']
})

export class UserstoryListComponents implements OnInit {
    title: string = "Userstories List";
    userstory: Userstory;
    searchLetterContains: string = "";
    userstories: Userstory[];
    ngOnInit() {
        this._service.getAll().subscribe(
            data => this.userstories = data
        )
    }
    delete(id: string) {
        this._service.deleteRecord(id).subscribe(
            data => {
                console.log("Deleted");
                this._service.getAll().subscribe(
                    data => this.userstories = data
                )

            }
        )
    }
    constructor(private _service: UserstoryService) {
    }
}