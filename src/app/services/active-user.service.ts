import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActiveUserService {
  private readonly _activeUserSource = new BehaviorSubject<string>('2');
  readonly _activeUser$ = this._activeUserSource.asObservable();

  constructor() { }
}
