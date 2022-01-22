import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  @Input() friendObj: User | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
