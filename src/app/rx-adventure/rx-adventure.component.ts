import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, AbstractControl} from "@angular/forms";
import {Observable} from "rxjs";
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/map'

@Component({
    selector: 'app-rx-adventure',
    templateUrl: './rx-adventure.component.html',
    styleUrls: ['./rx-adventure.component.css']
})
export class RxAdventureComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            search: []
        });

        /*
         let observable : any = Observable.interval(1000);
         observable
         .map(x => {
         console.log('calling the server to get the latest news');
         return [1,2,3];
         })
         .subscribe(news => console.log(news));



         let search : AbstractControl = this.form.get('search');

         search
         .valueChanges
         .debounceTime(400)
         .flatMap(str => <string>str.replace(' ', '-'))
         .subscribe(val => console.log(val));
         */

        /*let userStream = Observable.of({
         userId: 1, username: 'mosh'
         }).delay(2000);

         let tweetsStream = Observable.of([1, 2, 3]).delay(1500);

         Observable
         .forkJoin(userStream, tweetsStream)
         .map(joined => new Object({user: joined[0], tweets: joined[1]}))
         .subscribe(
         result => console.log(result),
         error => console.error(error)
         );

         let failedObservable = Observable.throw(new Error('Something failed.'));

         failedObservable
         .subscribe(
         x => console.log(x),
         error => console.log(error)
         )*/
        /*
         RETRY
         let counter = 0;
         let ajaxCalls = Observable.of('url')
         .flatMap(() => {

         if (++counter < 2)
         return Observable.throw(new Error('Request failed'));
         else
         return Observable.of([1, 2, 3]);
         })
         .retry(3)
         .subscribe(
         x => console.log(x),
         error => console.error(error)
         )*/

        //CATCH ERROR AND DO SOMETHING ELSE
        /* let remoteDataStream = Observable.of([1,2,3,4,5]);

         remoteDataStream
         .catch(err => {
         let localDataStream = Observable.of([1,2,3]);
         return localDataStream;
         })
         .subscribe(x => console.log(x));*/

        // TIMEOUT
        /*let remoteDatastream = Observable.of([1,2,3]).delay(5000);

         remoteDatastream
         .timeout(1000)
         .subscribe(
         x => console.log(x),
         error => console.error(error)
         )*/

        let observableOne = Observable.throw(new Error('error'))
            .subscribe(
                x => console.log(x),
                error => console.error(error),
                () => console.info('completed')
            );
        let observableTwo = Observable.from([1, 2, 3, 4, 5])
            .take(3)
            .subscribe(
                x => console.log(x),
                error => console.error(error),
                () => console.info('completed')
            );
    }

    ngOnInit() {
    }

}
