export class Course {
    name: string;
    isFavorite: boolean;
    isLiked: boolean;
    count: number;

    constructor(name: string, count: number, isLiked : boolean) {
        this.name = name;
        this.count = count;
        this.isLiked = isLiked;
    }
}