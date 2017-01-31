import {AbstractControl} from "@angular/forms";

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl) {
        if (control.value.indexOf(' ') > -1)
            return {cannotContainSpace: true};

        return null;
    }
}
