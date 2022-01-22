import {Component, OnDestroy, OnInit} from '@angular/core';
import {Husq} from "../../interfaces/husq";
import {TimelineService} from "../../services/timeline.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {
  husqs$: Subscription
  husqs: Husq[] | undefined;

  constructor(private timelineService: TimelineService) {
    this.husqs$ = this.timelineService.husqs$.subscribe(husqs => {
      this.husqs = husqs
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.husqs$.unsubscribe()
  }

  trackById(index: number, husq: Husq): number {
    return husq.id;
  }

  addHusq() {
    this.timelineService.addHusq(
      {
        id: 3,
        name: 'Zane Wilson',
        message: 'This is an added Husq'
      }
    )
  }

}
