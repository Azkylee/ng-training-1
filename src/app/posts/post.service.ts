import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Post} from "./post";
import {Observable} from "rxjs";

@Injectable()
export class PostService {

    private _url: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private _http: Http) {
    }

    getPosts() : Observable<Post[]> {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    createPost(post : Post) {
        return this._http.post(this._url, JSON.stringify(post))
            .map(resp => resp.json());
    }

}
