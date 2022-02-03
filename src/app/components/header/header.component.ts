import {Component, OnInit} from '@angular/core';
import {ActiveUserService} from "../../services/active-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeUserId: string | undefined

  constructor(private activeUserService: ActiveUserService,
              private router: Router) {
    this.activeUserService._activeUser$.subscribe(userId => this.activeUserId = userId);

  }

  ngOnInit(): void {
  }

  logout(): void {
    this.activeUserService.logoutUser();
    this.router.navigate(['']);
  }

}
