import { Injectable } from '@angular/core';
import {Gossip,SerializationHelper} from "./gossip.component";
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';//for converting the raw gossip json to gossip class.
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';

// interface Gossip{
//   title : string; //Title of the gossip
//   body : string; // Body of the gossip
// }

@Injectable()
export class GossipService {
  private apiRoot:string = 'http://localhost:8080/gossip-collection';
  private gossips= [];
  constructor(private http: HttpClient) {}
  // gossips:Gossip[] = [
  //   {title : "RBS fraud", body : "blah blah"},{title : "TSB fraud", body : "blah blah blah blah"}
  // ];


  loadGossips():Observable<Gossip[]> {
    return this.http.get(this.apiRoot).map(data => _.values(data));
  }





  // private handleError(error: Response | any) {
  //   // console.error(error);
  //   // return Observable.throw(error); // <= B
  // }

  // updateGossip(_gossip:Gossip):Promise<String>{
  //   return Promise.resolve('success');
  // }
  // addGossip(_gossip:Gossip):Promise<String>{
    // let promise = new Promise((resolve, reject) => {
    //   let apiURL = `${this.apiRoot}?term=${_gossip}&media=music&limit=20`;
    //   // this.http.get(apiURL)
    //   //   .toPromise()
    //   //   .then(
    //   //     res => { // Success
    //   //       console.log(res.json());
    //   //       resolve();
    //   //     }
    //   //   );
    // });
    // return promise;
  // }
}
