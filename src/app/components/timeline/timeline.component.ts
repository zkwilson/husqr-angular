import { Component, OnInit } from '@angular/core';
import {Husqs} from "../../interfaces/husqs";
import {initialHusqs} from "../../seeds/husq";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  husqs: Husqs[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, husq: Husqs): number {
    return husq.id;
  }

}
