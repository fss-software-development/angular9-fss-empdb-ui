import { TestBed } from '@angular/core/testing';

import { CustomerCommandHandlerService } from './command-handler.service';

describe('CustomerCommandHandlerService', () => {
  let service: CustomerCommandHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCommandHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
