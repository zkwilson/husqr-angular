import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {ActiveUserService} from "./active-user.service";
import {Friend} from "../interfaces/friend";
import {initialFriends} from "../seeds/friends";
import {v4 as uuidv4} from 'uuid';

const STORAGE_KEY = 'friends';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  private readonly _friendsSource = new BehaviorSubject<Friend[]>([]);
  readonly friends$ = this._friendsSource.asObservable();

  constructor(private localStorage: LocalStorageService,
              private activeUser: ActiveUserService) {
    const friends = this.localStorage.getItem(STORAGE_KEY);
    if (friends?.length) {
      this._setFriends(friends);
    } else {
      this._setFriends(initialFriends);
    }
  }

  private _setFriends(friends: Friend[]): void {
    this._friendsSource.next(friends);
    this.localStorage.setItem(STORAGE_KEY, friends);
  }


  getFriends(): Friend[] {
    return this._friendsSource.getValue();
  }

  addFriend(activeId: string, friendId: string): void {
    this._setFriends([
      ...this.getFriends(),
      {
        id: uuidv4(),
        pair: [activeId, friendId]
      }
    ]);

  }

  removeFriend(id: string): void {
    this._setFriends(this.getFriends().reduce<Friend[]>((acc, cur) => {
      const activeUserId = this.activeUser.getActiveUser();
      if (activeUserId) {
        if (!(cur.pair.includes(id) && cur.pair.includes(activeUserId))) {
          acc.push(cur);
        }
      }
      return acc
    }, []))
  }

  getFriendsByActiveUserId(userId: string | undefined): string[] {
    return userId ?
      this.getFriends().reduce<string[]>((acc, cur) => {
        let friendId;
        if (cur.pair[0] === userId) friendId = cur.pair[1]
        if (cur.pair[1] === userId) friendId = cur.pair[0]
        if (friendId) acc.push(friendId)
        return acc
      }, [])
      : [];
  }
}
