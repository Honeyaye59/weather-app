import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../interface'

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<Data>{
    return this.http.get<Data>('https://openweather43.p.rapidapi.com/weather', {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Host', 'openweather43.p.rapidapi.com')
        .set('X-RapidAPI-Key', 'c3d5fcc125msh9191418f1ca8a98p191dc6jsn6e8c26939a2d'),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    });
  }
}
