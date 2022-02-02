import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../interfaces/user";
import {LocalStorageService} from "./local-storage.service";
import {initialUsers} from "../seeds/users";
import {ActiveUserService} from "./active-user.service";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  private readonly _friendsSource = new BehaviorSubject<User[]>([]);
  readonly friends$ = this._friendsSource.asObservable();

  constructor(private localStorage: LocalStorageService,
              private activeUser: ActiveUserService) {
    const friends: User[] = this.localStorage.getItem('friends');
    if (friends?.length) {
      this._setFriends(friends);
    } else {
      const friends = initialUsers;
      this._setFriends(friends.filter(user => activeUser.getActiveUser() !== user.id));
    }
  }

  private _setFriends(users: User[]): void {
    this._friendsSource.next(users);
    this.localStorage.setItem('friends', users);
  }
}
