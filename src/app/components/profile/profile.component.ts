import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {UsersService} from "../../services/users.service";
import {ActiveUserService} from "../../services/active-user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: User | undefined
  authenticated: boolean = false

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UsersService,
              private router: Router,
              private activeUserService: ActiveUserService) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('userId')
      if (id) {
        this.profile = this.userService.getUserById(id)
      }
    })
  }

  ngOnInit(): void {
    this.activeUserService._activeUser$.subscribe(userId => {
      this.authenticated = this.profile?.id === userId
    })
  }

  editProfile() {
    this.router.navigate(['/edit'])
  }


}
