import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActiveUserService {
  private readonly _activeUserSource = new BehaviorSubject<string>('1');
  readonly _activeUser$ = this._activeUserSource.asObservable();

  constructor() { }
}
