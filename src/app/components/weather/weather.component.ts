import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentWeather: any | undefined

  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeather().subscribe(wxData =>  {
      this.currentWeather = wxData;
    })

    this.weatherService.getCors().subscribe((data) => console.log(data));
  }

  ngOnInit(): void {
  }

}
