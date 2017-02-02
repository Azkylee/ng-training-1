import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchiveHomeComponent} from './archive-home/archive-home.component';
import {Routes, RouterModule} from "@angular/router";
import {ArchiveDetailComponent} from './archive-detail/archive-detail.component';


const appRoutes: Routes = [
    {path: 'archives/:month/:year', component: ArchiveDetailComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [ArchiveHomeComponent, ArchiveDetailComponent]
})
export class ArchivesModule {
}
