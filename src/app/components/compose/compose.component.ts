import { Component, OnInit } from '@angular/core';
import {TimelineService} from "../../services/timeline.service";
import {v4 as uuidv4} from "uuid";
import {Router} from "@angular/router";

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  message: string = ''

  constructor(private timelineService: TimelineService, private router: Router) { }

  ngOnInit(): void {
  }

  addHusq(): void {
    if (this.message) {
      this.timelineService.addHusq({
        id: uuidv4,
        userId: '1',
        name: 'Zane Wilson',
        time: new Date(),
        message: this.message
      })
      this.router.navigate(['/timeline'])
    }
  }

}
