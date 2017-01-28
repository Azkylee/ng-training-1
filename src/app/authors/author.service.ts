import {Author} from "./author.class";


export class AuthorService {

    public getAuthors() : Array<Author> {
        return ['jean', 'pierre', 'paul', 'Tourtyflore'].map(author => new Author(author));
    }

}