/**
 * Created by Hadi Mehrpouya on 12/07/2017.
 */
// import { Component } from '@angular/core';
import {GossipService} from "./gossip.service";

// @Component({
//   providers: [GossipService]
// })

interface IGossip{
  _id:number;
  title : string; //Title of the gossip
  body : string; // Body of the gossip
  url:string;
  // addGossip();
  // updateGossip();
}
export class Gossip implements IGossip{
  _id:number;
  title : string;
  body : string;
  url:string;
  // constructor(_title : string,_body: string ) {
  //   this.title=_title;
  //   this.body=_body;
  // }
  //This function will communicate with the gossip service to update the mongodb backend with any changes.
  // addGossip(){
  //   console.log("will call the service to add gossip");
  //   // this.gossipService.addGossip(this).then();
  // }
  //
  // //TODO: research to find out whether it is better to use promise or observable in order to have live updates on keyup.
  // updateGossip(){
  //   console.log("will call the service to update gossip");
  //   // this.gossipService.addGossip(this).then();
  // }
}
export class SerializationHelper {
  static toInstance<T>(obj: T, json: string) : T {
    var jsonObj = JSON.parse(json);

    if (typeof obj["fromJSON"] === "function") {
      obj["fromJSON"](jsonObj);
    }
    else {
      for (var propName in jsonObj) {
        obj[propName] = jsonObj[propName]
      }
    }

    return obj;
  }
}

// deserialize<T>(json): T[] {
//   let collection: T[] = [];
//   json.map((item: T) => {
//     collection.push(item);
//   });
//   return collection;
// }
