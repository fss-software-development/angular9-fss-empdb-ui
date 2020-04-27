import { TestBed } from '@angular/core/testing';

import { FormLoaderService } from './form-loader.service';

describe('FormLoaderService', () => {
  let service: FormLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
