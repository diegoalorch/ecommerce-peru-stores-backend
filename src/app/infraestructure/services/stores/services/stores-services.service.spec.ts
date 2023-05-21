import { TestBed } from '@angular/core/testing';

import { StoresServicesService } from './stores-services.service';

describe('StoresServicesService', () => {
  let service: StoresServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoresServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
