import {GossipService} from "../services/gossip.service";
import {Inject} from "@angular/core";

interface IGossipComment{
  _id:number;
  comment : string;
  date_created : Date;
}
export class GossipComment implements IGossipComment{
  _id:number;
  comment : string;
  date_created : Date;
  constructor(_id:number,_comment:string){
   this._id=_id;
   this.comment=_comment;
   // this.date_created=_date;
  }

  // //TODO: research to find out whether it is better to use promise or observable in order to have live updates on keyup.
  setComment(_comment:string): void{
    this.comment=_comment;
    // this.titleChange.emit(this.title);
  }
  getComment(): string{
    return this.comment;
  }
  getId(): number{
    return this._id;
  }
}
