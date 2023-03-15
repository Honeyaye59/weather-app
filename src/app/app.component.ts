import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  weatherData!: Data;
  cityName: string = "Mandalay";
  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }
  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(this.cityName)
    .subscribe({
      next: (res) => {
        this.weatherData = res
      }
    })
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
}
