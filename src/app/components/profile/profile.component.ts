import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {UsersService} from "../../services/users.service";
import {ActiveUserService} from "../../services/active-user.service";
import {FriendsService} from "../../services/friends.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: User | undefined
  authenticated: boolean = false
  friend: boolean = false

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UsersService,
              private router: Router,
              private activeUserService: ActiveUserService,
              private friendService: FriendsService) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('userId')
      if (id) {
        this.profile = this.userService.getUserById(id)
      }
      let friends = this.friendService.getFriendsByActiveUserId(this.activeUserService.getActiveUser());
      if (id) {
        if (friends.includes(id)) {
          this.friend = true;
        }
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

  unfriend() {
    const id = this.profile?.id;
    if (id) {
      this.friendService.removeFriend(id);
      this.router.navigate(['friends']);
    }
  }

}
