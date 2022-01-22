import { Component, OnInit } from '@angular/core';
import {Person} from "../../interfaces/person";
import {people} from "../../seeds/people";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  friends: Person[] = people

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, husq: any) {
    return husq.id;
  }

}
