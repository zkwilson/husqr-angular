import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {ActiveUserService} from "./active-user.service";
import {Likes} from "../interfaces/likes";
import {initialLikes} from "../seeds/likes"
import {v4 as uuidv4} from 'uuid';

const STORAGE_KEY = 'likes';

@Injectable({
  providedIn: 'root'
})
export class LikeService {


  private readonly _likesSource = new BehaviorSubject<Likes[]>([]);
  readonly likes$ = this._likesSource.asObservable();

  constructor(private localStorage: LocalStorageService,
              private activeUser: ActiveUserService) {
    const likes = this.localStorage.getItem(STORAGE_KEY);
    if (likes?.length) {
      this._setLikes(likes);
    } else {
      this._setLikes(initialLikes);
    }
  }

  private _setLikes(likes: Likes[]): void {
    this._likesSource.next(likes);
    this.localStorage.setItem(STORAGE_KEY, likes);
  }


  getLikes(): Likes[] {
    return this._likesSource.getValue();
  }

  addLike(husqId: string, userId: string): void {

    const like = this.getLikes().find((like) => like.husqId === husqId)

    if (like) {
      this._setLikes([
        ...this.getLikes().filter((like) => like.husqId !== husqId),
        {...like, likes: like.likes.add(userId)}

      ]);
    } else {
      this._setLikes([
        ...this.getLikes(),
        {
          id: uuidv4(),
          husqId,
          likes: new Set<string>([userId])
        }
      ])
    }
  }


}
