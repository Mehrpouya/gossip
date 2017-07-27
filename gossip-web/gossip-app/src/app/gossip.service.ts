import { Injectable } from '@angular/core';
import {Gossip} from "./classes/gossip";
import { HttpClient,HttpResponse,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';//for converting the raw gossip json to gossip class.
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';

@Injectable()
export class GossipService {
  private apiRoot:string = 'http://localhost:8080/gossip-collection';
  private headers = new HttpHeaders().set("Content-Type", "application/json");
  private gossips= [];
  constructor(private http: HttpClient) {}
  loadGossips():Observable<Gossip[]> {
    return this.http.get(this.apiRoot).map(data => _.values(data));
  }
  //TODO: Change apiRoute to use search params instead of injecting param directly
  searchGossips(_term:string):Observable<Gossip[]>{
  if (_term.length<=0)
  {
    this.gossips=null;
    return;
  }
    let searchParams = new HttpParams();
    let apiRoute = "/search-gossip-titles?title="+_term;
    searchParams.set('title', _term);
    return this.http.get(this.apiRoot+apiRoute).map(data => _.values(data));
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
