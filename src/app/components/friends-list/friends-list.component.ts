import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {UsersService} from "../../services/users.service";
import {map, Subscription} from "rxjs";
import {FriendsService} from "../../services/friends.service";
import {ActiveUserService} from "../../services/active-user.service";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})

export class FriendsListComponent implements OnInit {

  friends: (User | undefined)[] | undefined;
  users$: Subscription
  nonFriends: User [] | undefined;

  constructor(
    private userService: UsersService,
    private activeUserService: ActiveUserService,
    private friendsService: FriendsService
  ) {
    const activeUserId = this.activeUserService.getActiveUser();
    this.users$ = this.friendsService.friends$
      .pipe(
        map((friendsArr) => {
          const userFriends = this.friendsService.getFriendsByActiveUserId(activeUserId);
          const friends = userFriends.map((friendId) => this.userService.getUserById(friendId));
          const nonFriends = this.userService
            .getUsers()
            .filter((user) => activeUserId !== user.id && !userFriends.includes(user.id));
          return {
            friends,
            nonFriends
          };
        })
      )
      .subscribe((users) => {
        this.friends = users.friends;
        this.nonFriends = users.nonFriends;
      });
  }



  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.users$.unsubscribe();
    this.users$.unsubscribe();
  }

  trackById(index: number, friend: any): number {
    return friend.id;
  }

}
