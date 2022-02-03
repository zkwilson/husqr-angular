import {Component, OnInit} from '@angular/core';
import {ActiveUserService} from "../../services/active-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeUserId: string | undefined

  constructor(private activeUserServce: ActiveUserService) {
    this.activeUserServce._activeUser$.subscribe(userId => this.activeUserId = userId);

  }

  ngOnInit(): void {
  }

}
