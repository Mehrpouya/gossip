import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipInputComponent } from './gossip-input.component';

describe('GossipInputComponent', () => {
  let component: GossipInputComponent;
  let fixture: ComponentFixture<GossipInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GossipInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GossipInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
