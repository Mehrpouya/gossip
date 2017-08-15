import { TestBed, inject } from '@angular/core/testing';

import { GossipService } from './gossip.service';

describe('GossipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GossipService]
    });
  });

  it('should be created', inject([GossipService], (service: GossipService) => {
    expect(service).toBeTruthy();
  }));
});
