import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../interfaces/user";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: User | undefined

  constructor(private router: ActivatedRoute,
              private userService: UsersService) {
    this.router.paramMap.subscribe((params) => {
      const id = params.get('userId')
      if (id) {
        this.profile = this.userService.getUserById(id)
      }
    })
  }

  ngOnInit(): void {
  }

}
