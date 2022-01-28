import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
  user: User | undefined

  constructor(private fb: FormBuilder,
              private activeUserService: ActiveUserService,
              private usersService: UsersService,
              private router: Router) {
    this.activeUserService._activeUser$.subscribe(userId => {
      this.user = this.usersService.getUserById(userId)
    })
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      name: new FormControl(
        this.user?.name,
        [Validators.required, Validators.maxLength(20)]),
      location: new FormControl(this.user?.location, Validators.required),
      age: new FormControl(this.user?.age, Validators.required),
      about: new FormControl(this.user?.about, Validators.required),
      likes: new FormArray(
        this.user?.likes?.split(', ').map(like => new FormControl(like)) || [new FormControl('')]
      ),
      dislikes: new FormArray(
        this.user?.dislikes?.split(', ').map(dislike => new FormControl(dislike)) || [new FormControl('')]
      )
    })
  }

  onSubmit(): void {

    if (this.user?.id) {
      const user: User = {
        ...this.editForm?.value,
        id: this.user?.id,
        likes: this.likes.value.filter(like => like?.trim().length ).join(", "),
        dislikes: this.dislikes.value.filter(dislike => dislike?.trim().length).join(", ")
      }
    this.usersService.editUser(user);
  }
    this.router.navigate(['/profile', this.user?.id])
  }

  get name() {
    return this.editForm?.get("name")
  }

  get location() {
    return this.editForm?.get("location")
  }

  get age() {
    return this.editForm?.get("age")
  }

  get likes() {
    return this.editForm?.get("likes") as FormArray
  }

  get dislikes() {
    return this.editForm?.get("dislikes") as FormArray
  }

  addLike() {
    const like = new FormControl()
    this.likes.push(like)
  }

  addDislike() {
    const dislike = new FormControl()
    this.dislikes.push(dislike)
  }

  deleteLike(i: number) {
    this.likes.removeAt(i)
  }

  deleteDislike(i: number) {
    this.dislikes.removeAt(i)
  }



}
