import {Component, Input, OnInit} from '@angular/core';
import {Husq, HusqWithName} from "../../interfaces/husq";
import {TimelineService} from "../../services/timeline.service";
import {ActiveUserService} from "../../services/active-user.service";
import {Router} from "@angular/router";
import {LikeService} from "../../services/like.service";


@Component({
  selector: 'app-husq',
  templateUrl: './husq.component.html',
  styleUrls: ['./husq.component.scss']
})
export class HusqComponent implements OnInit {
  @Input() husqObj: HusqWithName | undefined;

  activeUserId: string | undefined;
  time: Date = new Date();
  tempReply: string | undefined;
  reply: string | undefined;
  replies: string[] | undefined


  constructor(private timelineService: TimelineService,
              private activeUserService: ActiveUserService,
              private router: Router,
              private likeService: LikeService) {
    this.activeUserId = this.activeUserService.getActiveUser();
    this.replies = this.timelineService.getHusqIdOfReplies();
  }


  ngOnInit(): void {
  }

  saveReply(): void {
    this.reply = this.tempReply;
    this.tempReply = undefined;
  }

  removeHusq(): void {
    if (this.husqObj) {
      this.timelineService.removeHusq(this.husqObj.id);
    }
  }

  navigateToHusq() {
    const id = this.husqObj && this.husqObj.id;
    if (id) {
      this.router.navigate(['/husq', id])
    }
  }

  addLike(): void {
    if (this.husqObj && this.activeUserId) {
      this.likeService.addLike(this.husqObj?.id, this.activeUserId)
    }
  }

}

