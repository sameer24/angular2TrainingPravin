import { Component,OnInit } from "@angular/core";
import { User } from "../models/users";
import { JphPostsService } from "../services/jph.posts.service";

@Component({
    selector:'jph-Users',
    templateUrl:'app/jsonplaceholder/views/jph.users.component.html'
})

export class JphUserComponent implements OnInit {
    constructor(private _JphPostsService: JphPostsService){

    }
    users:User[];
    ngOnInit():void{
        this._JphPostsService.getAllUsers().subscribe(
            data=>{
                this.users=data
            },
            err=>console.log(err),()=>console.log('completed'));
        
    }
}