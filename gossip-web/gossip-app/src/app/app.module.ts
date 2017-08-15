import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GossipService} from './services/gossip.service';
import {HttpClientModule} from '@angular/common/http';
import {GossipSearchComponent} from './components/gossip-search/gossip-search.component';
import {GossipResultsComponent} from './components/gossip-results/gossip-results.component';
import {GossipComponent} from './components/gossip/gossip.component';
import {RouterModule,Routes} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { GossipCommentComponent } from './components/gossip-comment/gossip-comment.component';
import { GossipHashtagPipe } from './pipes/gossip-hashtag.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GossipSearchComponent,
    GossipResultsComponent,
    GossipComponent,
    GossipCommentComponent,
    GossipHashtagPipe
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
