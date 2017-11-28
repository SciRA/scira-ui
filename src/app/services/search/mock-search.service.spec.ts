import { TestBed, inject } from '@angular/core/testing';

import { MockSearchService } from './mock-search.service';

describe('MockSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockSearchService]
    });
  });

  it('should be created', inject([MockSearchService], (service: MockSearchService) => {
    expect(service).toBeTruthy();
  }));
});
