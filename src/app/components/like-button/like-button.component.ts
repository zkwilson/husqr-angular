import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {
  @Output() likeEvent: EventEmitter<undefined> = new EventEmitter<undefined>()

  constructor() {
  }

  ngOnInit(): void {
  }

  addLiked(): void {
    this.likeEvent.emit();
  }

}
