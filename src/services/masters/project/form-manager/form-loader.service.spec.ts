import { TestBed } from '@angular/core/testing';

import { ProjectFormStateService } from './form-loader.service';

describe('ProjectFormStateService', () => {
  let service: ProjectFormStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectFormStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
