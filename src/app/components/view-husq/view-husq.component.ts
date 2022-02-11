import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Husq, HusqWithName} from "../../interfaces/husq";
import {TimelineService} from "../../services/timeline.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-view-husq',
  templateUrl: './view-husq.component.html',
  styleUrls: ['./view-husq.component.scss']
})
export class ViewHusqComponent implements OnInit {

  husq: HusqWithName | undefined
  replies: Husq[] | undefined

  constructor(private activatedRoute: ActivatedRoute,
              private timelineService: TimelineService,
              private userService: UsersService) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const husqId = params.get('husqId');
      if (husqId) {
        this.husq = this.timelineService.getHusqById(husqId)
        if (this.husq) {
          const user = this.userService.getUserById(this.husq?.userId);
          if (this.husq) {
            this.husq.name = user?.name;
          }
        }
      }
    })
    if (this.husq?.id) {
      let replyArr: Husq[] = [];
      let arrOfRepliesByHusqId = this.timelineService.getRepliesToReplies(this.husq.id);
      if (arrOfRepliesByHusqId) {
        arrOfRepliesByHusqId.forEach((reply) => {
          if (reply) {
            let currentReply = this.timelineService.getHusqById(reply);
            console.log(currentReply)
            if (currentReply) {
              replyArr.push(currentReply)
            }
          }
        })
      }
      if (replyArr) {
        this.replies = replyArr.map((husq) => {
          const user = this.userService.getUserById(husq.userId);
          return {...husq, name: user?.name}
        })
      }
      console.log(this.replies);
    }
  }

  ngOnInit(): void {
  }

}

