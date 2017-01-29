import { Injectable } from '@angular/core';
import {Tweet} from "./tweet";

@Injectable()
export class TweetsService {

  getTweets() {

    let tweets = [
      {author: 'Max', title: 'My first tweet', message: 'This is my first tweet, I do like that I think', date: new Date(), authorImage: 'http://www.lorempixel.com/50/50/', likeCount: 15, isLike: false},
      {author: 'Paul', title: 'Hey there', message: 'This is my first tweet, I do like that I think', date: new Date(), authorImage: 'http://www.lorempixel.com/50/50/', likeCount: 50, isLike: true},
      {author: 'Henry', title: 'I shall pass', message: 'This is my first tweet, I do like that I think', date: new Date(), authorImage: 'http://www.lorempixel.com/50/50/', likeCount: 2, isLike: false},
      {author: 'Jack', title: 'Let\'s have fun', message: 'This is my first tweet, I do like that I think', date: new Date(), authorImage: 'http://www.lorempixel.com/50/50/', likeCount: 55, isLike: true},
      {author: 'Tourte', title: 'It\'s my birthday', message: 'This is my first tweet, I do like that I think', date: new Date(), authorImage: 'http://www.lorempixel.com/50/50/', likeCount: 7, isLike: true},
      {author: 'Caro', title: 'Congratulations', message: 'This is my first tweet, I do like that I think', date: new Date(), authorImage: 'http://www.lorempixel.com/50/50/', likeCount: 22, isLike: false}
    ];

    return tweets.map((tweet, index) => new Tweet(tweet.author, tweet.authorImage + '?' + index, tweet.title, tweet.message, tweet.date, tweet.likeCount, tweet.isLike));

  }

}
