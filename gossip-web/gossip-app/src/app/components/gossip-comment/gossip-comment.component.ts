import {Component, Input, OnInit} from '@angular/core';
import {Gossip} from "../../classes/gossip";
import {GossipInputType} from "../../enums/gossip-input-types.enum"

@Component({
  selector: 'app-gossip-comment',
  templateUrl: './gossip-comment.component.html',
  styleUrls: ['./gossip-comment.component.css']
})
export class GossipCommentComponent implements OnInit {
  gossip_input_type = GossipInputType;
  @Input() gossip:Gossip;

  constructor() { }

  ngOnInit() {
  }

}
