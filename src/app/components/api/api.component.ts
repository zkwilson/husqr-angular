import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  nameForm: FormGroup | undefined
  apiURL: string = 'https://api.agify.io?name=';
  name: string | undefined
  age: string  | undefined
  country: string | undefined

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.nameForm = new FormGroup({
      name: new FormControl(
        this.name,
        [Validators.required, Validators.maxLength(20)]),
      country: new FormControl(this.country, [Validators.maxLength(2), Validators.minLength(2)])
    })
  }


  onSubmit(): void {
    this.name = this.nameForm?.get('name')?.value;
    this.country = this.nameForm?.get('country')?.value
    if (this.name && this.country) {
      this.apiURL += this.name + '&country_id=' + this.country;
      this.http.get<{age: string}>(this.apiURL).subscribe(({age}) => this.age = age);
      this.apiURL = 'https://api.agify.io?name=';
    } else {
      if (this.name) {
        this.apiURL += this.name;
        this.http.get<{age: string}>(this.apiURL).subscribe(({age}) => this.age = age);
        this.apiURL = 'https://api.agify.io?name=';
      }
    }

  }
}
