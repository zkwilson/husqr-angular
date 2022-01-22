import { Injectable } from '@angular/core';
import { Husq } from "../interfaces/husq";
import { initialHusqs } from "../seeds/husq";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private readonly _husqSource = new BehaviorSubject<Husq[]>(initialHusqs)
  readonly husqs$ = this._husqSource.asObservable();

  constructor() { }

  private _setHusq(husqs: Husq[]) {
    this._husqSource.next(husqs)
  }

  getHusq() {
    return this._husqSource.getValue()
  }

  addHusq(husq: Husq) {
    const husqs = [...this.getHusq(), husq]
    this._setHusq(husqs)
  }
}
