import { Component } from '@angular/core';
import {Gossip} from "./gossip.component";
import {GossipService} from "./gossip.service";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GossipService]
})
export class AppComponent implements OnInit {
  gossips: Gossip[];
  constructor(private gossipService:GossipService) {

  }
  ngOnInit(): void {
    this.getGossips();
  }

  getGossips(){
    return this.gossipService.getGossips().then(gossips => this.gossips = gossips);
  }
}

