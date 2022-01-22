import { Injectable } from '@angular/core';
import { Husqs } from "../interfaces/husqs";
import { initialHusqs } from "../seeds/husq";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  husqs: Husqs[] = initialHusqs

  constructor() { }
}
