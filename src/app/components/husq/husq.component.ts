import {Component, Input, OnInit} from '@angular/core';
import {Husq} from "../../interfaces/husq";
import {TimelineService} from "../../services/timeline.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-husq',
  templateUrl: './husq.component.html',
  styleUrls: ['./husq.component.scss']
})
export class HusqComponent implements OnInit {
  @Input() husqObj: Husq & User | undefined

  time: Date = new Date()

  tempReply: string | undefined
  reply: string | undefined

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {
  }

  saveReply(): void {
    this.reply = this.tempReply;
    this.tempReply = undefined;
  }

  removeHusq(): void {
    if (this.husqObj) {
      this.timelineService.removeHusq(this.husqObj.id)
    }
  }

}

