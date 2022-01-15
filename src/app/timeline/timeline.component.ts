import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  husqs: any = [
    {
      id: 1,
      name: 'Zane Wilson',
      message: 'Testing 123123123'
    },
    {
      id: 2,
      name: 'Jessie Williamson',
      message: 'Test 456456'
    },
    {
      id: 3,
      name: 'Andy Freeman',
      message: 'Test 789789'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, husq: any) {
    return husq.id;
  }

}
