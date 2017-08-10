import { Component, OnInit } from '@angular/core';
import {GossipService} from '../gossip.service'
import {Gossip} from "../classes/gossip";
import 'rxjs/add/operator/debounceTime'; // This library allows us to add a little delay after each keyup so we won't bombard the server with requests
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';


@Component({
  selector: 'app-gossip-search',
  templateUrl: './gossip-search.component.html',
  styleUrls: ['./gossip-search.component.css']
})
export class GossipSearchComponent implements OnInit {
  // gossips$:Observable<Gossip[]>;
  gossips: Gossip[]=[];
  selectedGossip:Gossip;
  term = new FormControl();
  constructor(private gossipService:GossipService) {

    // debouncetime allows us to add a little delay after each keyup so we won't bombard the server with requests
    //https://angular.io/tutorial/toh-pt6#!#observables
    this.term.valueChanges.debounceTime(400)
      .switchMap(term => this.gossipService.searchGossips(term))
      .subscribe(gossips => {
      console.log("subscribe comming back with this",gossips);
      this.gossips=gossips;
    });
  }

  ngOnInit() {
  }
  //TODO: use this tutorial to deal with multiple requests, out of order responses and waste of resources on the server.
  //https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html

  searchGossips(term){

  }

}
