import { Component, Input, OnInit } from "@angular/core";
import { Userstory } from "../models/us";
import { UserstoryService } from "../services/us-service"
import { ActivatedRoute, Params } from "@angular/router"

@Component({
    selector: 'us-details',
    templateUrl: 'app/userstory/views/us-details.component.html',
    styleUrls: ['app/userstory/css/us.styles.css']
})

export class UsersoryDetailsComponent implements OnInit {
    constructor(private _service: UserstoryService, private _route: ActivatedRoute) {
    }
    title: string = "Userstory Details";
    // @Input() id: string;
    userstory: Userstory;
    ngOnInit() {
        let id: string;
        this._route.params.subscribe(
            params => id = params["id"]
        );
        this._service.getSingle(id).subscribe(
            data => this.userstory = data
        )
    }
    
}