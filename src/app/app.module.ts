import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HusqComponent } from './husq/husq.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimelineComponent } from './timeline/timeline.component';
import {FormsModule} from "@angular/forms";
import { FriendsListComponent } from './friends-list/friends-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HusqComponent,
    FooterComponent,
    FriendsComponent,
    ProfileComponent,
    PageNotFoundComponent,
    TimelineComponent,
    FriendsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
