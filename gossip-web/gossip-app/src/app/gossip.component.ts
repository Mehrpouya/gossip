/**
 * Created by Hadi Mehrpouya on 12/07/2017.
 */
// import { Component } from '@angular/core';
import {GossipService} from "./gossip.service";

// @Component({
//   providers: [GossipService]
// })

interface IGossip{
  title : string; //Title of the gossip
  body : string; // Body of the gossip
  addGossip();
  updateGossip();
}
export class Gossip implements IGossip{
  title : string;
  body : string;
  constructor(private gossipService:GossipService) {}
  //This function will communicate with the gossip service to update the mongodb backend with any changes.
  addGossip(){
    console.log("will call the service to add gossip");
    // this.gossipService.addGossip(this).then();
  }

  //TODO: research to find out whether it is better to use promise or observable in order to have live updates on keyup.
  updateGossip(){
    console.log("will call the service to update gossip");
    // this.gossipService.addGossip(this).then();
  }
}
