import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

