import { TestBed } from '@angular/core/testing';

import { LoginCommandHandlerService } from './command-handler.service';

describe('LoginCommandHandlerService', () => {
  let service: LoginCommandHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCommandHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
