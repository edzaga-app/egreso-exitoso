import { TestBed } from '@angular/core/testing';

import { ExternalWorkersService } from './external-workers.service';

describe('ExternalWorkersService', () => {
  let service: ExternalWorkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalWorkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
