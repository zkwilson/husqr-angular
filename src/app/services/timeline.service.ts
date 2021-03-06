import {Injectable} from '@angular/core';
import {Husq} from "../interfaces/husq";
import {initialHusqs} from "../seeds/husq";
import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from "./local-storage.service";


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

  getHusqs() {
    return this._husqSource.getValue()
  }

  addHusq(husq: Husq) {
    const husqs = [...this.getHusqs(), husq]
    this._setHusqs(husqs)
  }

  removeHusq(husqId: string): void {
    const husqs = [
      ...this.getHusqs().filter(husq => husq.id !== husqId)
    ]
    this._setHusqs(husqs)
  }

  getHusqById(id: string): Husq | undefined {
    return this.getHusqs().find(husq => husq.id === id)
  }

  getHusqsByUserId(userId: string): Husq[] {
    return this.getHusqs().filter(husq => husq.userId === userId)
  }

  getHusqIdOfReplies(): string[] | undefined {
    return this.getHusqs().reduce<string[]>((acc, cur) => {
      if (cur.repliesTo) {
        acc.push(cur.repliesTo)
      }
      return acc
    }, [])
  }

  getRepliesToHusq(id: string): Husq[] | undefined {
    let husqs = this.getHusqs();
    husqs = husqs.filter((husq) => husq.repliesTo?.includes(id))
    return husqs;
  }

  getRepliesToReplies(id: string): string[] {
    let result: string [] = [];
    let i = 0;
    let initialReplies = this.getRepliesToHusq(id);
    if (initialReplies) {
      for (i = 0; i < initialReplies.length; i++) {
        result.push(initialReplies[i].id)
        result = result.concat(this.getRepliesToReplies(initialReplies[i].id));
      }
    }
    return result;
  }
}



