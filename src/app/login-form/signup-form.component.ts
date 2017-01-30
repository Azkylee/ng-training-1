import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormControlName} from "@angular/forms";

@Component({
    selector: 'app-signup-form',
    templateUrl: 'signup-form.component.html',
    styleUrls: ['signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

    signupForm : FormGroup = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor() {
    }

    ngOnInit() {
    }

    signUp() {
        console.info(this.signupForm.value);
    }
}
