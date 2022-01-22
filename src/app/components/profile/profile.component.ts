import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name: string = 'Zane Wilson';
  age: string = '28';
  location: string = 'Omaha, NE';
  about: string = 'This is my about me section.';
  likes: string = 'I like stuff.';
  dislikes: string = 'I dislike stuff.';

  constructor() { }

  ngOnInit(): void {
  }

}
