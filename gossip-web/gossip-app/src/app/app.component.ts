import { Component } from '@angular/core';
import {Gossip} from "./gossip.component";
import {GossipService} from "./gossip.service";
import { OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GossipService]
})
export class AppComponent implements OnInit {
  gossips$:Observable<Gossip[]>;
  gossips: Gossip[];
  constructor(private gossipService:GossipService) {

  }
  ngOnInit(): void {
    this.loadGossips();
  }
/*loading gossips using subscribe means if there are new gossips we will be notified.
Would be interesting to add tag filter to hear, so if there are related gossips notify me or update my list.*/
  loadGossips(){
    this.gossips$ = this.gossipService.loadGossips();
    this.gossips$.subscribe(gossips => {
      this.gossips=gossips;
      console.log(this.gossips);
    }
      // this.gossips = gossips});
  );
}
}

