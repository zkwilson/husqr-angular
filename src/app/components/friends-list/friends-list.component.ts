import { Component, OnInit } from '@angular/core';
import { User } from "../../interfaces/user";
import {initialUsers} from "../../seeds/users";
import {UsersService} from "../../services/users.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FriendsService} from "../../services/friends.service";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  friends$: Subscription
  friends: User[] | undefined

  constructor(private userService: UsersService,
              private friendsService: FriendsService) {
    //this.friends$ = this.userService.users$.subscribe(friends => this.friends = friends)
    this.friends$ = this.friendsService.friends$.subscribe(friends => this.friends = friends);
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
