import { Component } from '@angular/core';
import {Gossip} from "./gossip.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testGossip : Gossip = {title: "my first gossip",body:'did you know that blah blah'};
}

