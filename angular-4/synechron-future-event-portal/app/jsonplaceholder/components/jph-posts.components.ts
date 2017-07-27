import { Component,OnInit } from "@angular/core";
import { Post } from "../models/posts";
import { JphPostsService } from "../services/jph.posts.service";

@Component({
    selector:'jph-posts',
    templateUrl:'app/jsonplaceholder/views/jph.posts.component.html'
})

export class JphPostComponent implements OnInit {
    constructor(private _JphPostsService: JphPostsService){

    }
    posts:Post[];
    ngOnInit():void{
        this._JphPostsService.getAllPosts().subscribe(
            data=>this.posts=data,
            err=>console.log(err),()=>console.log('completed'));
        
    }
}