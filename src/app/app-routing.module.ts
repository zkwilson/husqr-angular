import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./components/profile/profile.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {TimelineComponent} from "./components/timeline/timeline.component";
import {FriendsListComponent} from "./components/friends-list/friends-list.component";
import {ComposeComponent} from "./components/compose/compose.component";

const routes: Routes = [

  {path: '', component: TimelineComponent, pathMatch: 'full'},
  {path: 'friends', component: FriendsListComponent, pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
  {path: 'compose', component: ComposeComponent, pathMatch: 'full'},
  {path: 'timeline', component: TimelineComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
