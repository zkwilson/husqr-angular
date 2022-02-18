import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ContentComponent} from './components/content/content.component';
import {HusqComponent} from './components/husq/husq.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProfileComponent} from './components/profile/profile.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {TimelineComponent} from './components/timeline/timeline.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FriendsListComponent} from './components/friends-list/friends-list.component';
import {FriendComponent} from './components/friend/friend.component';
import {ComposeComponent} from './components/compose/compose.component';
import {EditComponent} from './components/edit/edit.component';
import {LoginComponent} from './components/login/login.component';
import {UserGuardGuard} from "./guards/user-guard.guard";
import {RegisterComponent} from './components/register/register.component';
import {ViewHusqComponent} from './components/view-husq/view-husq.component';
import { UsernamePipe } from './pipes/username.pipe';
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { FoxComponent } from './components/fox/fox.component';
import {HttpClientModule} from "@angular/common/http";
import { ApiComponent } from './components/api/api.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HusqComponent,
    FooterComponent,
    ProfileComponent,
    PageNotFoundComponent,
    TimelineComponent,
    FriendsListComponent,
    FriendComponent,
    ComposeComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent,
    ViewHusqComponent,
    UsernamePipe,
    LikeButtonComponent,
    FoxComponent,
    ApiComponent,
    WeatherComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
