import {Component, Input,Output, OnInit,EventEmitter} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import {Gossip} from "../classes/gossip";
import {GossipService} from "../gossip.service";
@Component({
  selector: 'app-gossip',
  templateUrl: './gossip.component.html',
  styleUrls: ['./gossip.component.css'],
  providers:[GossipService],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class GossipComponent implements OnInit {
  @Input() gossip:Gossip;
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  public editable: boolean = true;

  constructor(private gossipService:GossipService) { }
  ngOnInit() {
  }
  //TODO: Check if this solution can fix the content editable caret issue. :  https://stackoverflow.com/questions/39023701/angular-2-contenteditable
  setGossipTitle(_gossip):void {
    this.gossipService.updateGossip(_gossip);
  }
  setGossipBody(_gossip):void {
    this.gossipService.updateGossip(_gossip);
  }
  setGossipTags(_gossip):void {
    this.gossipService.updateGossip(_gossip);
  }
  toggleVisible():void{
    this.visible=!this.visible;
  }
  getVisible():Boolean{
    return this.visible;
  }
  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }


}