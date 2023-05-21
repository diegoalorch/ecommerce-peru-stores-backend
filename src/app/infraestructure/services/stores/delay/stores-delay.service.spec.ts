import { TestBed } from '@angular/core/testing';

import { StoresDelayService } from './stores-delay.service';

describe('StoresDelayService', () => {
  let service: StoresDelayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoresDelayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
