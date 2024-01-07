import { TestBed } from '@angular/core/testing';

import { ApiConnectionServiceService } from './api-connection-service.service';

describe('ApiConnectionServiceService', () => {
  let service: ApiConnectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConnectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
