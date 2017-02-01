import {Component, OnInit, OnDestroy} from '@angular/core';
import {PostService} from "./post.service";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    providers: [PostService]
})
export class PostsComponent implements OnInit {

    isLoading:boolean = true;

    constructor(private _postService: PostService) {
        this._postService.createPost({userId: 1, title: 'title', body: 'my body', id: 1})
    }

    ngOnInit() {
        this._postService.getPosts()
            .delay(1500)
            .subscribe(posts => {
                console.log(posts[0].title);
                this.isLoading = false;
            })
    }

}
