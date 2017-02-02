import {Injectable} from '@angular/core';
import {Archive} from "./archive";

@Injectable()
export class ArchiveService {

    archiveList : Array<Archive>;

    constructor() {
    }

    getArchives(): Array<Archive> {

        this.archiveList = [
            new Archive('Archive 1', 'My super archive', 1, 2, 2017),
            new Archive('Archive 2', 'My super archive', 1, 12, 2017),
            new Archive('Archive 3', 'My super archive', 1, 7, 2017),
            new Archive('Archive 4', 'My super archive', 1, 3, 2017),
            new Archive('Archive 5', 'My super archive', 1, 8, 2017),
            new Archive('Archive 6', 'My super archive', 1, 4, 2017),
            new Archive('Archive 7', 'My super archive', 1, 7, 2017),
            new Archive('Archive 8', 'My super archive', 1, 3, 2017),
            new Archive('Archive 9', 'My super archive', 1, 5, 2017),
            new Archive('Archive 10', 'My super archive', 1, 6, 2017),
            new Archive('Archive 11', 'My super archive', 1, 4, 2017),
        ];

        return this.archiveList;

    }

}
