import { TestBed } from '@angular/core/testing';

import { QueryLogService } from './query-log.service';

describe('QueryLogService', () => {
  let service: QueryLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
