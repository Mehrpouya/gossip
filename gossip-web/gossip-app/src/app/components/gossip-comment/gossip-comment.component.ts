import {Component, Input, OnInit} from '@angular/core';
import {Gossip} from "../../classes/gossip";

@Component({
  selector: 'app-gossip-comment',
  templateUrl: './gossip-comment.component.html',
  styleUrls: ['./gossip-comment.component.css']
})
export class GossipCommentComponent implements OnInit {
  @Input() gossip:Gossip;

  constructor() { }

  ngOnInit() {
  }

}
