import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "../interfaces/user";
import { initialUsers } from "../seeds/users";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly _usersSource = new BehaviorSubject<User[]>(initialUsers);
  readonly users$ = this._usersSource.asObservable();
  private loggedIn:boolean = false;

  constructor() { }

  private _setUsers(users: User[]): void {
    this._usersSource.next(users);
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

  authenticateUser (username: string, password:string): string | undefined{
    let user = this.getUsers().find(user => user.username === username && user.password === password);
    if(user) {
      return user.id
    }
    else {
      return undefined
    }

  }

  getLoggedIn() {
    return this.loggedIn;
  }
}
