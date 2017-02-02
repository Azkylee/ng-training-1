export class Archive {

    name: string;
    text: string;
    day: number;
    month: number;
    year: number;

    constructor(name: string, text: string, day: number, month: number, year: number) {
        this.name = name;
        this.text = text;
        this.day = day;
        this.month = month;
        this.year = year;
    }

}
