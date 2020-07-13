import { TestBed } from '@angular/core/testing';

import { DiscoverByCitiesService } from './discover-by-cities.service';

describe('DiscoverByCitiesService', () => {
  let service: DiscoverByCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoverByCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
