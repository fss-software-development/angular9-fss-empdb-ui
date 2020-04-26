import { TestBed } from '@angular/core/testing';

import { CustomerFormStateService } from './form-loader.service';

describe('CustomerFormStateService', () => {
  let service: CustomerFormStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerFormStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
