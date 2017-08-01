import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import  {GossipService } from './gossip.service';
import { HttpClientModule } from '@angular/common/http';
import { GossipSearchComponent } from './gossip-search/gossip-search.component';
import { GossipResultsComponent } from './gossip-results/gossip-results.component';
import { GossipDetailComponent } from './gossip/gossip.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Gossip} from './classes/gossip';

@NgModule({
  declarations: [
    AppComponent,
    GossipSearchComponent,
    GossipResultsComponent,
    GossipDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GossipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
