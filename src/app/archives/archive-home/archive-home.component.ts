import { Component, OnInit } from '@angular/core';
import {Archive} from "../archive";
import {ArchiveService} from "../archive.service";

@Component({
  selector: 'app-archive-home',
  templateUrl: './archive-home.component.html',
  styleUrls: ['./archive-home.component.css'],
  providers: [ArchiveService]
})
export class ArchiveHomeComponent implements OnInit {

  archiveList: Array<Archive>;

  constructor(private _archiveService : ArchiveService) {}

  ngOnInit() {
    this.archiveList = this._archiveService.getArchives();
  }

}
