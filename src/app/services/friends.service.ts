import {Injectable} from '@angular/core';
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

  // getUsers(): User[] {
  //   return this._usersSource.getValue();
  // }
  //
  // addUser(user: User): void {
  //   const users = [...this.getUsers(), user];
  //   this._setUsers(users)
  // }
  //
  // removeUser(id: string): void {
  //   const users = [...this.getUsers().filter(user => user.id !== id)]
  //   this._setUsers(users)
  // }

  getFriends(): User[] {
    return this._friendsSource.getValue();
  }

  removeFriend(id: string): void {
    console.log(id);
    const friends = [...this.getFriends().filter(friend => friend.id !== id)];
    this._setFriends(friends);
  }
}
