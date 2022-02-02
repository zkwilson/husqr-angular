import {Component, OnDestroy, OnInit} from '@angular/core';
import {Husq} from "../../interfaces/husq";
import {TimelineService} from "../../services/timeline.service";
import {map, Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {
  husqs$: Subscription
  husqs: any[] | undefined;

  constructor(private timelineService: TimelineService,
              private userService: UsersService) {
    this.husqs$ = this.timelineService.husqs$
      .pipe(
        map(husqs => {
          return husqs.map(husq => {
            const user = this.userService.getUserById(husq.userId);
            return {...husq, name: user?.name}
          })
        })
      ).subscribe(husqs => this.husqs = husqs)
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.husqs$.unsubscribe()
  }

  trackById(index: number, husq: Husq & User): string {
    return husq.id;
  }


}
