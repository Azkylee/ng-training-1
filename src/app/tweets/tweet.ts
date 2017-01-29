export class Tweet {
    author: string;
    authorImage: string;
    title: string;
    message: string;
    date: Date;
    likeCount: number;
    isLiked: boolean;

    constructor(author: string, authorImage: string, title: string, message: string, date: Date, likeCount: number, isLiked: boolean) {
        this.author = author;
        this.authorImage = authorImage;
        this.title = title;
        this.message = message;
        this.date = date;
        this.likeCount = likeCount;
        this.isLiked = isLiked;
    }
}
