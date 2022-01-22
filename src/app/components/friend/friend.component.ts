import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  @Input() friendObj: User | undefined
  // profile: User | undefined

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  // navigateToUser(id: string): void {
  //
  // }

}
