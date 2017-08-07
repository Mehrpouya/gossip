import { Component, OnInit } from '@angular/core';
import {GossipService} from '../gossip.service'
import {Gossip} from "../classes/gossip";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gossip-search',
  templateUrl: './gossip-search.component.html',
  styleUrls: ['./gossip-search.component.css']
})
export class GossipSearchComponent implements OnInit {
  // gossips$:Observable<Gossip[]>;
  gossips: Gossip[];
  selectedGossip:Gossip;
  constructor(private gossipService:GossipService) {
    this.gossipService.searchGossips("a").subscribe(gossips => {
      this.gossips=gossips;
    });
  }

  ngOnInit() {
  }
  //TODO: use this tutorial to deal with multiple requests, out of order responses and waste of resources on the server.
  //https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html

  searchGossips(term){
    this.gossipService.searchGossips(term).subscribe(gossips => {
      this.gossips=gossips;
    });
  }

}
