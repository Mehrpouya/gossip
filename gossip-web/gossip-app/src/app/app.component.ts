import { Component } from '@angular/core';
import { OnInit,NgModule,Directive } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GossipComponent} from "./components/gossip/gossip.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports: [NgbModule.forRoot()]
})
export class AppComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
    // this.loadGossips();
  }
/*loading gossips using subscribe means if there are new gossips we will be notified.
Would be interesting to add tag filter to hear, so if there are related gossips notify me or update my list.*/
  // loadGossips(){
  //   this.gossips$ = this.gossipService.loadGossips();
  //   this.gossips$.subscribe(gossips => {
  //     this.gossips=gossips;
  //     console.log(this.gossips);
  //   }
  //     // this.gossips = gossips});
  // );
}

