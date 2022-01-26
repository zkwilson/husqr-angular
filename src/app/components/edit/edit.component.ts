import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActiveUserService} from "../../services/active-user.service";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user";

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
              private usersService: UsersService) {
    this.activeUserService._activeUser$.subscribe(userId => this.activeUserId = userId)
  }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: [''],
      location: [''],
      age: [null],
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
  }


}
