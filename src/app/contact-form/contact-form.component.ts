import {Component, OnInit} from '@angular/core';
import {Router, CanDeactivate} from '@angular/router'

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    routerCanDeactivate (next, previous) {
        console.info('next', next, 'previous', previous);
        return next;
    }

    onSubmit(form) {
        this._router.navigate(['courses']);
    }
}
