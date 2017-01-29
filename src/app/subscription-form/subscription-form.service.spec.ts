/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubscriptionFormService } from './subscription-form.service';

describe('SubscriptionFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionFormService]
    });
  });

  it('should ...', inject([SubscriptionFormService], (service: SubscriptionFormService) => {
    expect(service).toBeTruthy();
  }));
});
