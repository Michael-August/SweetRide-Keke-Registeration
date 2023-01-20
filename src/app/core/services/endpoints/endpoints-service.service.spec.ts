import { TestBed } from '@angular/core/testing';

import { EndpointsServiceService } from './endpoints-service.service';

describe('EndpointsServiceService', () => {
  let service: EndpointsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
