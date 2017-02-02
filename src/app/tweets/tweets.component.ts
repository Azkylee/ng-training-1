import { Component, OnInit } from '@angular/core';
import {Tweet} from "./tweet";
import {TweetsService} from "./tweets.service";

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
  providers: [TweetsService]
})

export class TweetsComponent implements OnInit {

  tweetList : Array<Tweet>;

  constructor(tweetService: TweetsService) {
    this.tweetList = tweetService.getTweets();
  }

  ngOnInit() {}

}
