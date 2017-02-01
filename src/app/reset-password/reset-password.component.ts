import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PasswordValidators} from "./password-validators";

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

    form: FormGroup;

    constructor(fb: FormBuilder) {

        this.form = fb.group({

            currentpassword: ['',
                Validators.compose([
                    Validators.required
                ]),
                Validators.composeAsync([
                    PasswordValidators.checkIfCurrentPasswordIsValid
                ])
            ],
            newpassword: ['',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(5)
                ])
            ],
            newpasswordconfirm: ['',
                Validators.compose([
                    Validators.required,
                    PasswordValidators.passwordConfirmMustMatchNewPassword
                ])
            ]

        });
    }

    ngOnInit() {
    }

    resetConfirmPassword() {
        this.form.controls['newpasswordconfirm'].setValue('')
    }

    resetPassword() {
        console.log(this.form);
    }

}
