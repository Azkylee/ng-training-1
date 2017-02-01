import {Component, OnInit, Input} from '@angular/core';
import {Follower} from "./follower";
import {GithubService} from "./github.service";
import {Observable, Observer} from "rxjs";
import {GithubUser} from "./github-user";

@Component({
    selector: 'app-github-user',
    templateUrl: './github-user.component.html',
    styleUrls: ['./github-user.component.css'],
    providers: [GithubService]
})
export class GithubUserComponent implements OnInit {

    @Input() name: string;

    followers: Array<Follower> = [];
    user: GithubUser = {};
    httpError: boolean = false;
    isLoading: boolean = true;

    constructor(private _gibhubService: GithubService) {
    }

    ngOnInit() {

        let userObserver = this._gibhubService.getUserInfo(this.name);

        let followerObserver = this._gibhubService.getUserFollowers(this.name);

        Observable.forkJoin(userObserver, followerObserver)
            .map(joined => new Object({user: joined[0], followers: joined[1]}))
            .subscribe(
                result => {
                    this.followers = result['followers'];
                    this.user = result['user'];
                },
                error => {
                    this.httpError = true;
                    this.isLoading = false;
                },
                () => this.isLoading = false
            );
    }

}
