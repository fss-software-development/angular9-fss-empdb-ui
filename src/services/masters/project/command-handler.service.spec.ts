import { TestBed } from '@angular/core/testing';

import { ProjectCommandHandlerService } from './command-handler.service';

describe('ProjectCommandHandlerService', () => {
  let service: ProjectCommandHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCommandHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
