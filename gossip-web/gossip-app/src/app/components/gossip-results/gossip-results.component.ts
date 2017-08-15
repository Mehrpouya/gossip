import {Component, Input, OnInit} from '@angular/core';
import {Gossip} from "../../classes/gossip";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {GossipComment} from "../../classes/gossip-comment";


@NgModule({
  imports: [NgbModule]
})

@Component({
  selector: 'app-gossip-results',
  templateUrl: './gossip-results.component.html',
  styleUrls: ['./gossip-results.component.css']
})
export class GossipResultsComponent implements OnInit {

  @Input() gossips: Gossip[];
  selectedGossip: Gossip;
  visible: Boolean;
  method:String;

  constructor() {
  }

  ngOnInit() {
    // this.sampleData();
  }

  sampleData(): void {
    // let gossipSample = [new Gossip(121212, 'NHS is selling publicly owned lands', 'I\'ve heard from a very solid source that NHS is selling our lands to private companies for a very low price.', 'I\'ve heard from a very solid source that NHS is selling our lands to ...', ['banking'],[{_id:121211,comment:"",date_created:""}]),
    //   new Gossip(1212212, 'RBS is investing over £300m in nuclear bombs', 'I\'ve heard from a friend who works in RBS investment portfolio management team, that annually they are investing over £300m of our money into nuclear bombs!', 'I\'ve heard from a friend who works in RBS investment portfolio management team, that annually they are investing...', ['banking'],[{comment:"",date_created:""}]),
    //   new Gossip(121212, 'NHS is selling publicly owned lands', 'I\'ve heard from a very solid source that NHS is selling our lands to private companies for a very low price.', 'I\'ve heard from a very solid source that NHS is selling our lands to ...', ['banking'],[{comment:"",date_created:""}]),
    //   new Gossip(1212212, 'RBS is investing over £300m in nuclear bombs', 'I\'ve heard from a friend who works in RBS investment portfolio management team, that annually they are investing over £300m of our money into nuclear bombs!', 'I\'ve heard from a friend who works in RBS investment portfolio management team, that annually they are investing...', ['banking'],[{comment:"",date_created:""}]),
    //   new Gossip(121212, 'NHS is selling publicly owned lands', 'I\'ve heard from a very solid source that NHS is selling our lands to private companies for a very low price.', 'I\'ve heard from a very solid source that NHS is selling our lands to ...', ['banking'],[{comment:"",date_created:""}]),
    //   new Gossip(1212212, 'RBS is investing over £300m in nuclear bombs', 'I\'ve heard from a friend who works in RBS investment portfolio management team, that annually they are investing over £300m of our money into nuclear bombs!', 'I\'ve heard from a friend who works in RBS investment portfolio management team, that annually they are investing...', ['banking'],[{comment:"",date_created:""}]),
    //   new Gossip(121212, 'NHS is selling publicly owned lands', 'I\'ve heard from a very solid source that NHS is selling our lands to private companies for a very low price.', 'I\'ve heard from a very solid source that NHS is selling our lands to ...', ['banking'],[{comment:"",date_created:""}]),
    //   new Gossip(1212212, 'RBS is investing over £300m in nuclear bombs', 'I\'ve heard from a friend who works in RBS investment portfolio management team, that annually they are investing over £300m of our money into nuclear bombs!', 'I\'ve heard from a friend who works in RBS investment portfolio management team, that annually they are investing...', ['banking'],[{comment:"",date_created:""}])];
    // // = //this will generate sample data in case we don't have access to the db.
    // this.gossips = gossipSample;
    // this.selectedGossip=this.gossips[0];
    // this.visible = true;
    // this.method="update";

  }

  /*loading gossips using subscribe means if there are new gossips we will be notified.
  Would be interesting to add tag filter to hear, so if there are related gossips notify me or update my list.*/
  // loadGossips(){
  //   this.gossips$ = this.gossipService.loadGossips();
  //   this.gossips$.subscribe(gossips => {
  //       this.gossips=gossips;
  //       console.log(this.gossips);
  //     }
  //     // this.gossips = gossips});
  //   );
  // }
  onSelect(_gossip: Gossip): void {
    this.visible = true;
    this.selectedGossip = _gossip;
    this.method="update";
  }
  startGossip():void{
    this.visible = true;
    // this.selectedGossip = new Gossip(11212,'new gossip','gossip details','',[],[new GossipComment(121212,""));
    this.gossips.push(this.selectedGossip);
    this.method="add";
  }
}

