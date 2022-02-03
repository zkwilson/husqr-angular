import {Injectable} from '@angular/core';
import {Husq} from "../interfaces/husq";
import {initialHusqs} from "../seeds/husq";
import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {User} from "../interfaces/user";
import {initialUsers} from "../seeds/users";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private readonly _husqSource = new BehaviorSubject<Husq[]>(initialHusqs)
  readonly husqs$ = this._husqSource.asObservable();

  constructor(private localStorage: LocalStorageService) {
    const husqs: Husq[] = this.localStorage.getItem('husqs');
    if (husqs?.length) {
      this._setHusqs(husqs);
    } else {
      this._setHusqs(initialHusqs);
    }
  }


  private _setHusqs(husqs: Husq[]) {
    this._husqSource.next(husqs)
    this.localStorage.setItem('husqs', husqs)
  }

  getHusq() {
    return this._husqSource.getValue()
  }

  addHusq(husq: Husq) {
    const husqs = [...this.getHusq(), husq]
    this._setHusqs(husqs)
  }

  removeHusq(husqId: string): void {
    const husqs = [
      ...this.getHusq().filter(husq => husq.id !== husqId)
    ]
    this._setHusqs(husqs)
  }

  getHusqById(id: string): Husq | undefined {
    return this.getHusq().find(husq => husq.id === id)
  }

  getHusqsByUserId(userId: string): Husq[] {
    return this.getHusq().filter(husq => husq.userId === userId)
  }
}


