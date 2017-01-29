import { Injectable } from '@angular/core';
import {SubscriptionValidity} from "./subscription-validity";

@Injectable()
export class SubscriptionFormService {

  constructor() { }

  getValidityOptions() {
    return ['Daily', 'Monthly', 'Weekly'].map(validity => new SubscriptionValidity(validity));
  }

}
