import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, MaxLengthValidator, Validators} from "@angular/forms";
import {ActiveUserService} from "../../services/active-user.service";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm: FormGroup | undefined
  activeUserId: string | undefined

  constructor(private fb: FormBuilder,
              private activeUserService: ActiveUserService,
              private usersService: UsersService,
              private router: Router) {
    this.activeUserService._activeUser$.subscribe(userId => this.activeUserId = userId)
  }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      location: ['', [Validators.required, Validators.maxLength(100)]],
      age: [null, [Validators.required, Validators.min(13), Validators.max(120)]],
      about: [''],
      likes: [''],
      dislikes: ['']
    })
  }

  onSubmit(): void {
    console.log(this.editForm?.value);
    const user: User = {...this.editForm?.value,
      id: this.activeUserId}
      this.usersService.editUser(user);
      this.router.navigate(['/profile', this.activeUserId])
  }

  get name() {
    return this.editForm?.get("name");
  }

  get location() {
    return this.editForm?.get("location");
  }

  get age() {
    return this.editForm?.get("age");
  }


}
