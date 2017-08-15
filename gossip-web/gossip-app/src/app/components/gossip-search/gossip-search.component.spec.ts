import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipSearchComponent } from './gossip-search.component';

describe('GossipSearchComponent', () => {
  let component: GossipSearchComponent;
  let fixture: ComponentFixture<GossipSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GossipSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GossipSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
