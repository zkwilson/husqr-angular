import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from "../services/users.service";
import {ActiveUserService} from "../services/active-user.service";

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(private activeUserService: ActiveUserService,
              private router: Router
              ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.activeUserService.getActiveUser()){
        return true;
      }
      else{
        return this.router.navigate(['/']);
      }
  }
 }


