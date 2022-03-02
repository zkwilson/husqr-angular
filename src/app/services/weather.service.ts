import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<any> {
    return this.http.get(environment.weather.baseURL)
  }

  getCors() {
    return this.http.get('/api');
  }

}
