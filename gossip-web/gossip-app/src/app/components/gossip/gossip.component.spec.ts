import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipComponent } from './gossip.component';

describe('GossipComponent', () => {
  let component: GossipComponent;
  let fixture: ComponentFixture<GossipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GossipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GossipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
