import {AbstractControl} from "@angular/forms";

export class PasswordValidators {

    constructor() {
    }

    static passwordConfirmMustMatchNewPassword(control: AbstractControl) {

        let newpassword = control.root.get('newpassword');
        let newpasswordconfirm = control;

        if (!newpassword || !newpasswordconfirm) return;

        if (newpassword.value != newpasswordconfirm.value)
            return {passwordConfirmMustMatchNewPassword: true};

        return null;
    }

    static checkIfCurrentPasswordIsValid(control: AbstractControl) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (control.value !== 'tourte')
                    resolve({passwordInvalid: true});
                else
                    resolve(null);
            }, 1000);

        });

    }
}
