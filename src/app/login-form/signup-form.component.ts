import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormControlName, FormBuilder} from "@angular/forms";
import {UsernameValidators} from "../username-validators";

@Component({
    selector: 'app-signup-form',
    templateUrl: 'signup-form.component.html',
    styleUrls: ['signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

    /*signupForm : FormGroup = new FormGroup({
     username: new FormControl('', Validators.required),
     password: new FormControl('', Validators.required)
     });*/

    signupForm: FormGroup;

    constructor(fb: FormBuilder) {

        this.signupForm = fb.group({
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ])],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    signUp() {
        console.info(this.signupForm.value);
    }
}
