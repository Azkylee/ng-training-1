import {Author} from "./author.class";


export class AuthorService {

    public getAuthors() : Array<Author> {
        return [
            {name: 'Max', isFavorite: true, count: 150},
            {name: 'Azor', isFavorite: false, count: 180},
            {name: 'Hélium', isFavorite: false, count: 130}
        ].map(author => new Author(author.name, author.count, author.isFavorite));
    }

}