import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-husq',
  templateUrl: './husq.component.html',
  styleUrls: ['./husq.component.scss']
})
export class HusqComponent implements OnInit {


  @Input() message: string | undefined
  @Input() name: string = ''

  time: Date = new Date();

  tempReply: string | undefined
  reply: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  saveReply(): void {
    this.reply = this.tempReply;
    this.tempReply = undefined;
  }
}
