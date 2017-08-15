import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipCommentComponent } from './gossip-comment.component';

describe('GossipCommentComponent', () => {
  let component: GossipCommentComponent;
  let fixture: ComponentFixture<GossipCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GossipCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GossipCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
