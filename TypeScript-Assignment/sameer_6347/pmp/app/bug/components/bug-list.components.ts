
import { Component, OnInit } from "@angular/core";
import { Bug } from "../models/bug";
import { BugService } from "../services/bug-service"
import { ActivatedRoute, Params } from "@angular/router"

@Component({
    selector: 'bug-list',
    templateUrl: 'app/bug/views/bug-list.component.html',
    styleUrls: ['app/bug/css/bug.styles.css']
})

export class BugListComponents implements OnInit {
     constructor(private _service: BugService, private _route: ActivatedRoute) {
    }
    title: string = "Bug List";
    bug: Bug;
    searchLetterContains: string = "";
    bugs: Bug[];
    ngOnInit() {
       
        this._service.getAll().subscribe(
            data => this.bugs = data
        )
    }

    delete(id: string) {
        this._service.deleteRecord(id).subscribe(
            data => {
                console.log("Deleted");
                this._service.getAll().subscribe(
            data => this.bugs = data
        )

            }
        )
    }
    
}