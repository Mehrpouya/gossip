import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gossip app';
  body = 'gossip body';
}

export class Gossip {
  title = 'Gossip title';
  body = 'gossip body';
  comments = [{user:'anon',comment:'blah'},{user:'anon2',comment:'blah2'}];
}
