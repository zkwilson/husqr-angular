import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {map, Subscription} from "rxjs";
import {FriendsService} from "../../services/friends.service";
import {ActiveUserService} from "../../services/active-user.service";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  @Input() friendObj: User | undefined
  nonFriends: User[] | undefined


  constructor(private router: Router,
              private userService: UsersService) {
    this.nonFriends = this.userService.getNonFriendUsers();
    console.log(this.nonFriends); //  This is not working. get non friend users is returning friends
}


  ngOnInit(): void {
  }

  navigateToUser() {
    const id = this.friendObj && this.friendObj.id
    if (id) {
      this.router.navigate(['/profile', id])
    }
  }


}
