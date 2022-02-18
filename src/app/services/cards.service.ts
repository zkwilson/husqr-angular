import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  constructor(private http: HttpClient) {}

  getOneDeck(): Observable<any> {
    return this.http.get(environment.cards.baseURL + "new/shuffle/?deck_count=1");
  }

  drawOne(deckId: string): Observable<any> {
    console.log(environment.cards.baseURL + deckId + '/draw/?count=1')
    return this.http.get(environment.cards.baseURL + deckId + '/draw/?count=1');
  }
}
