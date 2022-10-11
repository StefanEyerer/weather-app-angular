import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherData } from '../types/weather-data.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly BASE_URL = 'https://api.weatherapi.com/v1/current.json';
  private readonly API_KEY = '<ADD_API_KEY_HERE>';
  private weatherData = new BehaviorSubject<WeatherData[]>([]);
  public weatherData$ = this.weatherData.asObservable();

  public constructor(private readonly http: HttpClient) {}

  public requestWeatherData(location: string) {
    this.http
      .get<WeatherData>(`${this.BASE_URL}?key=${this.API_KEY}&q=${location}`)
      .subscribe((result) => {
        this.weatherData.next([...this.weatherData.value, result]);
      });
  }

  public resetWeatherData() {
    this.weatherData.next([]);
  }
}
