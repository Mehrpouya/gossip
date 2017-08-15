import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipResultsComponent } from './gossip-results.component';

describe('GossipResultsComponent', () => {
  let component: GossipResultsComponent;
  let fixture: ComponentFixture<GossipResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GossipResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GossipResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
