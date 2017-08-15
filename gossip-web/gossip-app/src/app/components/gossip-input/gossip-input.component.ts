import {Component, Input, OnInit} from '@angular/core';
import {GossipComment} from "../../classes/gossip-comment";
import {GossipInputType} from "../../enums/gossip-input-types.enum"
import {Gossip} from "../../classes/gossip";
@Component({
  selector: 'app-gossip-input',
  templateUrl: './gossip-input.component.html',
  styleUrls: ['./gossip-input.component.css']
})
export class GossipInputComponent implements OnInit {
  gossip_input_type = GossipInputType;
  @Input() comment:GossipComment;
  @Input() gossip:Gossip;
  @Input() editable:boolean;
  @Input() inputType=GossipInputType;
  constructor() { }

  ngOnInit() {
  }

}
