import {Component, Input, OnInit} from '@angular/core';
import {Husq} from "../../interfaces/husq";
import {TimelineService} from "../../services/timeline.service";

@Component({
  selector: 'app-husq',
  templateUrl: './husq.component.html',
  styleUrls: ['./husq.component.scss']
})
export class HusqComponent implements OnInit {
  @Input() husqObj: Husq | undefined

  time: Date = new Date()

  tempReply: string | undefined
  reply: string | undefined

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {

    //console.log(this.timelineService.getHusqsByUserId('1'))
    console.log(this.timelineService.getHusqById('2'))
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

