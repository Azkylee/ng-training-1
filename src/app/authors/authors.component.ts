import { Component, OnInit } from '@angular/core';
import {Author} from "./author.class";
import {AuthorService} from "./author.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService]
})
export class AuthorsComponent implements OnInit {

  list : Array<Author>;

  constructor(authorService : AuthorService) {
    this.list = authorService.getAuthors();
  }

  ngOnInit() {
  }

  onFavoriteChange($event) {
    console.info('Favorite event', $event);
  }

}
