import { TestBed } from '@angular/core/testing';

import { Network } from './db';

describe('Network', () => {
  let service: Network;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Network);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
