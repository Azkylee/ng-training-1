import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {AutoGrowDirective} from './auto-grow.directive';
import {FavoriteComponent} from './favorite/favorite.component';
import {LikeComponent} from './like/like.component';
import {VoteComponent} from './vote/vote.component';
import {TweetsComponent} from './tweets/tweets.component';
import {SummaryPipe} from './summary.pipe';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {SubscriptionFormComponent} from './subscription-form/subscription-form.component';
import {SignupFormComponent} from './login-form/signup-form.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {RxAdventureComponent} from './rx-adventure/rx-adventure.component';
import {PostsComponent} from './posts/posts.component';
import {GithubUserComponent} from './github-user/github-user.component';
import {Route, RouterModule, Routes} from "@angular/router";
import {ArchivesModule} from "./archives/archives.module";
import {ArchiveHomeComponent} from "./archives/archive-home/archive-home.component";

const appRoutes: Routes = [
    {path: 'archives', component: ArchiveHomeComponent},
    {path: 'tweets', component: TweetsComponent},
    {path: 'authors', component: AuthorsComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'favorite', component: FavoriteComponent},
    {path: 'githubuser', component: GithubUserComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {path: 'contact-form', component: ContactFormComponent},
    {path: 'login-form', component: SignupFormComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'zippy', component: ZippyComponent},
    {path: '**', component: CoursesComponent}, // default route
];

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        AuthorsComponent,
        AutoGrowDirective,
        FavoriteComponent,
        LikeComponent,
        VoteComponent,
        TweetsComponent,
        SummaryPipe,
        ZippyComponent,
        ContactFormComponent,
        SubscriptionFormComponent,
        SignupFormComponent,
        ResetPasswordComponent,
        RxAdventureComponent,
        PostsComponent,
        GithubUserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        ArchivesModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
