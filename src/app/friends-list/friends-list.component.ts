import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  friends= [
    {
      id: 1,
      name: 'Nathan Campbell',
      location: 'Omaha, NE'
    },
    {
      id: 2,
      name: 'Zaeem Haq',
      location: 'Omaha, NE'
    },
    {
      id: 3,
      name: 'Reece Ristau',
      location: 'Omaha, NE'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, husq: any) {
    return husq.id;
  }

}
