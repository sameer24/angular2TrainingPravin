import { Component, Input,OnInit } from "@angular/core";
import { Bug } from "../models/bug";
import { BugService } from "../services/bug-service"
import { ActivatedRoute, Params } from "@angular/router"

@Component({
    selector: 'bug-details',
    templateUrl: 'app/bug/views/bug-details.component.html',
     styleUrls:['app/bug/css/bug.styles.css']
})

export class BugDetailsComponent  implements OnInit{
    constructor(private _service: BugService,private _route:ActivatedRoute) {      
    }
    title: string = "Bug Details";
    //@Input() id: string;
    bug:Bug;
     ngOnInit() {
          let id: string;
        this._route.params.subscribe(
            params => id = params["id"]
        );
        this._service.getSingle(id).subscribe(
            data => this.bug = data
        )
    } 
}