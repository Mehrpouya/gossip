import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gossip-input',
  templateUrl: './gossip-input.component.html',
  styleUrls: ['./gossip-input.component.css']
})
export class GossipInputComponent implements OnInit {
  @Input() comment:Comment;
  constructor() { }

  ngOnInit() {
  }

}
