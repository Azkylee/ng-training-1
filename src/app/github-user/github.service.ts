import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Follower} from "./follower";
import {GithubUser} from "./github-user";

@Injectable()
export class GithubService {

    private _url = 'https://api.github.com/users';

    constructor(private _http: Http) {
    }

    getUserFollowers(username: string): Observable<Follower[]> {
        let url = username + '/followers';
        return this._http.get(url)
            .map(followers => followers.json());
    }

    getUserInfo(username: string) : Observable<GithubUser> {
        return this._http.get(this._url)
            .map(user => user.json());
    }

}
