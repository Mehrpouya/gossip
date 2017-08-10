import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GossipService} from './gossip.service';
import {HttpClientModule} from '@angular/common/http';
import {GossipSearchComponent} from './gossip-search/gossip-search.component';
import {GossipResultsComponent} from './gossip-results/gossip-results.component';
import {GossipComponent} from './gossip/gossip.component';
import {RouterModule,Routes} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule,
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
