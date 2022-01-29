import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActiveUserService} from "../../services/active-user.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined

  constructor(private router: Router,
              private userService: UsersService,
              private activeUserService: ActiveUserService
              ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup( {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    const username = this.loginForm?.get("username")?.value;
    const password = this.loginForm?.get("password")?.value;

    let userId = this.userService.authenticateUser(username, password);
    if(userId) {
      this.activeUserService.setActiveUser(userId);
      this.router.navigate(['/timeline']);
    }

  }

}
