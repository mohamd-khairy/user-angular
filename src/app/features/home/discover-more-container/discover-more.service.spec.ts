import { TestBed } from '@angular/core/testing';

import { DiscoverMoreService } from './discover-more.service';

describe('DiscoverMoreService', () => {
  let service: DiscoverMoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoverMoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
