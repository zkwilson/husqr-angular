import {Component, OnDestroy, OnInit} from '@angular/core';
import {Husq, HusqWithName} from "../../interfaces/husq";
import {TimelineService} from "../../services/timeline.service";
import {map, Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";
import {FriendsService} from "../../services/friends.service";
import {ActiveUserService} from "../../services/active-user.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {
  husqs$: Subscription
  husqs: Husq[] | undefined;

  constructor(private timelineService: TimelineService,
              private userService: UsersService,
              private friendService: FriendsService,
              private activeUserService: ActiveUserService) {
    const activeUserId = this.activeUserService.getActiveUser();

    this.husqs$ = this.timelineService.husqs$
      .pipe(
        map((husqs) => {
          const friends = this.friendService.getFriendsByActiveUserId(activeUserId);
          return husqs.filter((husq) =>
            !husq.repliesTo && friends.includes(husq.userId) || husq.userId === activeUserId
            && !husq.repliesTo);
        }),
      ).subscribe(husqs => this.husqs = husqs)
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.husqs$.unsubscribe()
  }


  trackById(index: number, husq: Husq): string {
    return husq.id;
  }

}
