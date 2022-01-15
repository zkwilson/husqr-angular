import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FriendsComponent} from "./friends/friends.component";
import {ProfileComponent} from "./profile/profile.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TimelineComponent} from "./timeline/timeline.component";

const routes: Routes = [

  {path: '', component: TimelineComponent, pathMatch: 'full'},
  {path: 'friends', component: FriendsComponent, pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
