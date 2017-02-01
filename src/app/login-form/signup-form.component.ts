import {Component, OnInit, Inject} from '@angular/core';
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

    constructor(@Inject(FormBuilder) fb: FormBuilder) {

        this.signupForm = fb.group({
            username: ['',
                Validators.compose([
                    Validators.required,
                    UsernameValidators.cannotContainSpace
                ]),
                Validators.composeAsync([
                    UsernameValidators.shouldBeUnique
                ])
            ],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    signUp() {

        // var result = AuthService.log(this.form.value)

        this.signupForm.get('username').setErrors({
           invalidLogin : true
        });

        console.info(this.signupForm.controls);
        console.info(this.signupForm.value);
    }
}
