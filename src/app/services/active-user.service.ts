import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../interfaces/user";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ActiveUserService {
  private readonly _activeUserSource = new BehaviorSubject<string | undefined>(undefined);
  readonly _activeUser$ = this._activeUserSource.asObservable();

  constructor(private localStorage: LocalStorageService) {
    const activeUser = this.localStorage.getItem('activeUser');
    if (activeUser) {
      this._setActiveUser(activeUser);
    }
  }

  private _setActiveUser(id: string | undefined): void {
    this._activeUserSource.next(id);
    this.localStorage.setItem('activeUser', id);
  }

  setActiveUser(id: string): void {
    this._setActiveUser(id);
  }

  getActiveUser(): string | undefined {
    return this._activeUserSource.getValue();
  }

  logoutUser(): void {
    this._setActiveUser(undefined);
  }
}
