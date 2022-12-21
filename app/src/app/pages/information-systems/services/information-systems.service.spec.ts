import { TestBed } from '@angular/core/testing';

import { InformationSystemsService } from './information-systems.service';

describe('InformationSystemsService', () => {
  let service: InformationSystemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationSystemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
