export class Author {
    name : string;
    isFavorite : boolean;
    count: number;

    constructor(name: string, count: number, isFavorite: boolean) {
        this.name = name;
        this.isFavorite = isFavorite;
        this.count = count;
    }
}