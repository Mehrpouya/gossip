import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GossipService} from './gossip.service';
import {HttpClientModule} from '@angular/common/http';
import {GossipSearchComponent} from './gossip-search/gossip-search.component';
import {GossipResultsComponent} from './gossip-results/gossip-results.component';
import {GossipComponent} from './gossip/gossip.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Gossip} from './classes/gossip';
import {RouterModule,Routes} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    GossipSearchComponent,
    GossipResultsComponent,
    GossipComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'gossip', component: GossipComponent},
        {path: 'search', component: GossipSearchComponent}
      ])
  ],
  providers: [GossipService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
