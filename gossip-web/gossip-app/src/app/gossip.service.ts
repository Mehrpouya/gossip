import { Injectable } from '@angular/core';
import {Gossip} from "./gossip.component";

@Injectable()
export class GossipService {
  apiRoot:string = 'http://localhost:8080/gossip-collection';

  constructor() { }
  gossips:Gossip[] = [
    {title : "RBS fraud", body : "blah blah"},{title : "TSB fraud", body : "blah blah blah blah"}
  ];


  getGossips(): Promise<Gossip[]> {
    return Promise.resolve(this.gossips);
  }

  updateGossip(_gossip:Gossip):Promise<String>{
    return Promise.resolve('success');
  }
  addGossip(_gossip:Gossip):Promise<String>{
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            console.log(res.json());
            resolve();
          }
        );
    });
    return promise;
  }
}
