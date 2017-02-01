import {AbstractControl} from "@angular/forms";

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl) {
        if (control.value.indexOf(' ') > -1)
            return {cannotContainSpace: true};

        return null;
    }

    static shouldBeUnique(control: AbstractControl) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (control.value === 'mosh')
                    resolve({shouldBeUnique: true});
                else
                    resolve(null);
            }, 1000);

        });
    }
}
