import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {map, Subscription} from "rxjs";
import {FriendsService} from "../../services/friends.service";
import {ActiveUserService} from "../../services/active-user.service";
import {Friend} from "../../interfaces/friend";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  @Input() friendObj: User | undefined
  nonFriend: User[] | undefined
  activeUser: string | undefined
  users$: Subscription


  constructor(private router: Router,
              private userService: UsersService,
              private friendsService: FriendsService,
              private activeUserService: ActiveUserService) {
    this.activeUser = this.activeUserService.getActiveUser();
    this.users$ = this.userService.users$.pipe(
      map((user) => {
        return user.reduce<User[]>((acc, cur) => {
          let nonfriends = this.userService.getNonFriendUsers();
          if (nonfriends?.includes(cur)) {
            acc.push(cur);
          }
          return acc
        },[])
      })
    ).subscribe((user) => this.nonFriend = user);

  }
      ngOnInit(): void {
  }

  navigateToUser() {
    const id = this.friendObj && this.friendObj.id
    if (id) {
      this.router.navigate(['/profile', id])
    }
  }

  addFriend(activeId: string | undefined, friendId: string) {
    if(activeId) {
      this.friendsService.addFriend(activeId, friendId);
    }
  }


}
