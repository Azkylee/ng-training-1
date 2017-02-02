import {Component, OnInit} from '@angular/core';
import {Archive} from "../archive";
import {ArchiveService} from "../archive.service";
import {ActivatedRoute} from "@angular/router"

@Component({
    selector: 'app-archive-detail',
    templateUrl: './archive-detail.component.html',
    styleUrls: ['./archive-detail.component.css'],
    providers: [ArchiveService]
})
export class ArchiveDetailComponent implements OnInit {

    archiveList: Array<Archive>;
    filteredArchiveList: Array<Archive>;

    month: number;
    year: number;

    constructor(private _archiveService: ArchiveService, private _route: ActivatedRoute) {
    }

    ngOnInit() {

        this.archiveList = this._archiveService.getArchives();

        this._route.params
            .subscribe(params => {
                this.month = Number.parseInt(params['month']);
                this.year = Number.parseInt(params['year']);
            });

        this.filteredArchiveList = this.archiveList.filter(archive => archive.month == this.month && archive.year == this.year)
    }

}
