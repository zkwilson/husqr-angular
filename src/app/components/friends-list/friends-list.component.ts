import { Component, OnInit } from '@angular/core';
import { User } from "../../interfaces/user";
import {initialUsers} from "../../seeds/users";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  friends: User[] = initialUsers

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, husq: any) {
    return husq.id;
  }

}
