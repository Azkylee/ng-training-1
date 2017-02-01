import {Injectable} from '@angular/core';

@Injectable()
export class ResetPasswordService {

    constructor() {
    }

    checkIfPasswordValid(password) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (password === 'tourte')
                    resolve(true);
                else
                    resolve(false);
            }, 1000);

        });

    }

}
