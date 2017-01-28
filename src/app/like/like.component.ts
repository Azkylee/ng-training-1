import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {


    @Input() isLiked: boolean;
    @Input() count: number;
    @Output() change : EventEmitter<any> = new EventEmitter();

    constructor() {

    }

    ngOnInit() {
    }

    addLike() {
        this.isLiked = !this.isLiked;
        this.isLiked ? this.count++ : this.count--;
        this.change.emit({isLike: this.isLiked, count: this.count});
    }

}
