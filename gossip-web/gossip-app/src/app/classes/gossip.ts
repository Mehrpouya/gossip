import {GossipService} from "../services/gossip.service";
import {Inject} from "@angular/core";
import {GossipComment} from "./gossip-comment";

interface IGossip{
  _id:number;
  title : string; //Title of the gossip
  body : string; // Body of the gossip
  url:string;
  sample:string;
  tags:string[];
  comments:GossipComment[];
  // addGossip();
  // updateGossip();
}

export class Gossip implements IGossip{
  _id:number;
  title : string;
  body : string;
  url:string;
  tags:string[]
  sample: string;
  comments:GossipComment[];
  constructor(_id:number,_title : string,_body: string, _sample:string="",_tags:string[],_comments:GossipComment[]) {
    this._id=_id;
    this.title=_title;
    this.body=_body;
    this.sample=_body;
    this.tags = _tags;
    this.comments=_comments;
  }
  //This function will communicate with the gossip service to update the mongodb backend with any changes.
  // addGossip(){
  //   console.log("will call the service to add gossip");
  //   // this.gossipService.addGossip(this).then();
  // }
  //
  // //TODO: research to find out whether it is better to use promise or observable in order to have live updates on keyup.
  setTitle(_title:string): void{
    this.title=_title;
    // this.titleChange.emit(this.title);
  }
  getTitle(): string{
    return this.title;
  }
  setBody(_body:string): void{
    this.title=_body;
  }
  getBody(): string{
    return this.body;
  }
  setTags(_tags:string[]):void{
    this.tags=_tags;
  }
  getTags():string[]{
    return this.tags;
  }
}
