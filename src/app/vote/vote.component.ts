import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

    myVote: number;

    @Input() voteCount: number;

    @Output() vote: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.myVote = 0;
    }

    ngOnInit() {
    }

    onVoteUp() {
        if (this.myVote == 0 || this.myVote < 0) {
            this.myVote++;
        }

        this.vote.emit({myVote: this.myVote})
    }

    onVoteDown() {
        if (this.myVote == 0 || this.myVote > 0) {
            this.myVote--;
        }

        this.vote.emit({myVote: this.myVote})
    }

}