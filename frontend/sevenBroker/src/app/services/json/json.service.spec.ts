import { TestBed } from '@angular/core/testing';

import { AccionesService } from './json.service';

describe('AccionesService', () => {
  let service: AccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
