import { Component, OnInit } from '@angular/core';
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
        const user = this.userService.getUserById(husqId);
        this.husq = this.timelineService.getHusqById(husqId)
        if (this.husq) {
          this.husq.name = user?.name;
        }
      }
    })
    if (this.husq?.id) {
      this.replies = this.timelineService.getRepliesToHusq(this.husq.id);
      if(this.replies) {
        this.replies = this.replies.map((husq) => {
          const user = this.userService.getUserById(husq.userId);
          console.log(user)
          return {...husq, name: user?.name}
        })
      }
    }
    console.log(this.replies)
  }

  // return husqs.map((husq) => {
  // const user = this.userService.getUserById(husq.userId);
  // return {...husq, name: user?.name}

  ngOnInit(): void {

  }


}

