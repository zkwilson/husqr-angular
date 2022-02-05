import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {initialUsers} from "../../seeds/users";
import {UsersService} from "../../services/users.service";
import {map, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FriendsService} from "../../services/friends.service";
import {ActiveUserService} from "../../services/active-user.service";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})

export class FriendsListComponent implements OnInit {

  friends$: Subscription
  friends: (User | undefined)[] | undefined;
  users$: Subscription
  @Input() nonFriends: User [] | undefined;


  constructor(
    private userService: UsersService,
    private activeUserService: ActiveUserService,
    private friendsService: FriendsService
  ) {
    const activeUserId = this.activeUserService.getActiveUser();

    this.friends$ = this.friendsService.friends$
      .pipe(
        map((friends) => {
          return friends.reduce<User[]>((acc, cur) => {
            if (!acc.find((user) => cur.pair.includes(user.id))) {
              let friendId;
              if (cur.pair[0] === activeUserId) friendId = cur.pair[1];
              if (cur.pair[1] === activeUserId) friendId = cur.pair[0];
              if (friendId) {
                const user = this.userService.getUserById(friendId);
                if (user) {
                  acc.push(user);
                }
              }
            }
            return acc;
          }, []);
        })
      )
      .subscribe((friends) => (this.friends = friends));

    this.users$ = this.userService.users$.pipe(
      map((user) => {
        return user.filter((user) => !this.friends?.includes(user) && user.id !== this.activeUserService.getActiveUser())
      })
    ).subscribe((nonfriends) => (this.nonFriends = nonfriends));
  }



  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.friends$.unsubscribe();
  }

  trackById(index: number, friend: any): number {
    return friend.id;
  }

}
