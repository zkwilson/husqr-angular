import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../interfaces/user";
import {initialUsers} from "../seeds/users";
import {LocalStorageService} from "./local-storage.service";
import {ActiveUserService} from "./active-user.service";
import {FriendsService} from "./friends.service";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly _usersSource = new BehaviorSubject<User[]>([]);
  readonly users$ = this._usersSource.asObservable();

  //private loggedIn:boolean = false;

  constructor(private localStorage: LocalStorageService,
              private activeUserService: ActiveUserService,
              private friendsService: FriendsService) {
    const users: User[] = this.localStorage.getItem('users');
    if (users?.length) {
      this._setUsers(users);
    } else {
      this._setUsers(initialUsers);
    }
  }

  private _setUsers(users: User[]): void {
    this._usersSource.next(users);
    this.localStorage.setItem('users', users);
  }

  getUsers(): User[] {
    return this._usersSource.getValue();
  }

  addUser(user: User): void {
    const users = [...this.getUsers(), user];
    this._setUsers(users)
  }

  removeUser(id: string): void {
    const users = [...this.getUsers().filter(user => user.id !== id)]
    this._setUsers(users)
  }

  getUserById(id: string): User | undefined {
    return this.getUsers().find(user => user.id === id)
  }

  editUser(updatedUser: User): void {
    const users = [...this.getUsers().filter(user => user.id !== updatedUser.id), updatedUser]
    this._setUsers(users)
  }

  authenticateUser(username: string, password: string): string | undefined {
    let user = this.getUsers().find(user => user.username === username && user.password === password);
    if (user) {
      return user.id
    } else {
      return undefined
    }
  }

  getNonFriendUsers(): User[] | undefined {
    const id = this.activeUserService.getActiveUser();
    let friends = this.friendsService.getFriendsByActiveUserId(id);
    let allUsers = this.getUsers();
    return allUsers.filter((user) => !friends.includes(user.id) && user.id !== id);
  }
}
