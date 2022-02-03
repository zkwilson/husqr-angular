import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActiveUserService} from "../../services/active-user.service";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | undefined

  constructor(private activeUserService: ActiveUserService,
              private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.min(13), Validators.required]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  register() {

    const id = uuidv4()
    const user: User = {
      name: this.registerForm?.get("name")?.value,
      id,
      username: this.registerForm?.get("username")?.value,
      password: this.registerForm?.get("password")?.value,
      age: this.registerForm?.get("age")?.value
    }
    this.usersService.addUser(user);
    this.activeUserService.setActiveUser(user.id)
    this.router.navigate(['timeline'])
  }
}
