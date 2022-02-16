import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.scss']
})
export class FoxComponent implements OnInit {

  imageSrc: string | undefined
  apiURL: string = 'https://randomfox.ca/floof/';

  constructor(private http: HttpClient) {
    this.http.get<{ image: string, link: string }>(this.apiURL).subscribe(({image}) => (this.imageSrc = image));
  }

  ngOnInit(): void {
  }

}
