import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Post } from '../models/posts'
import { User } from '../models/users'

@Injectable()

export class JphPostsService {
    constructor(private _http: Http) {

    }
    getAllPosts():Observable<Post[]> {
       return this._http.get("https://jsonplaceholder.typicode.com/posts").map(res => res.json());
    }
     getAllUsers():Observable<User[]> {
       return this._http.get("https://jsonplaceholder.typicode.com/users").map(res => res.json());
    }
}