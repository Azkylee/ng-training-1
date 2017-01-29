import {Component, OnInit} from '@angular/core';
import {SubscriptionValidity} from "./subscription-validity";
import {SubscriptionFormService} from "./subscription-form.service";

@Component({
    selector: 'app-subscription-form',
    templateUrl: './subscription-form.component.html',
    styleUrls: ['./subscription-form.component.css'],
    providers: [SubscriptionFormService]
})
export class SubscriptionFormComponent implements OnInit {

    listValidity: Array<SubscriptionValidity>;

    constructor(subscriptionService: SubscriptionFormService) {
        this.listValidity = subscriptionService.getValidityOptions();
    }

    ngOnInit() {
    }

    log(x) {
        console.info(x);
    }

}
