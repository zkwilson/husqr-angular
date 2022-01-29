import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./components/profile/profile.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {TimelineComponent} from "./components/timeline/timeline.component";
import {FriendsListComponent} from "./components/friends-list/friends-list.component";
import {ComposeComponent} from "./components/compose/compose.component";
import {EditComponent} from "./components/edit/edit.component";
import {LoginComponent} from "./components/login/login.component";
import {UserGuardGuard} from "./guards/user-guard.guard";

const routes: Routes = [

  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'timeline', component: TimelineComponent, pathMatch: 'full'},
  {path: 'friends', component: FriendsListComponent, pathMatch: 'full', canActivate: [UserGuardGuard]},
  {path: 'profile/:userId', component: ProfileComponent },
  {path: 'compose', component: ComposeComponent, pathMatch: 'full', canActivate: [UserGuardGuard]},
  {path: 'timeline', component: TimelineComponent, pathMatch: 'full'},
  {path: 'edit', component: EditComponent, pathMatch: 'full', canActivate: [UserGuardGuard]},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
