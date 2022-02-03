import {Component, Input, OnInit} from '@angular/core';
import {TimelineService} from "../../services/timeline.service";
import {v4 as uuidv4} from "uuid";
import {Router} from "@angular/router";
import {ActiveUserService} from "../../services/active-user.service";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  user: User | undefined
  message: string = ''
  activeUserId: string | undefined

  constructor(private timelineService: TimelineService,
              private router: Router,
              private activeUserService: ActiveUserService,
              private userService: UsersService) {
    this.activeUserId = this.activeUserService.getActiveUser();
    const id = this.activeUserService.getActiveUser();
    if (id) {
      this.user = this.userService.getUserById(id);
    }

  }

  ngOnInit(): void {
  }

  addHusq(): void {
    if (this.message && this.activeUserId) {
      this.timelineService.addHusq({
        id: uuidv4(),
        userId: this.activeUserId,
        time: new Date(),
        message: this.message
      })
      this.router.navigate(['/timeline'])
    }
  }

}
