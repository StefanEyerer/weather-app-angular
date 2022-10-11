import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  public constructor(public readonly weatherService: WeatherService) {}

  public handleSubmit(location: string) {
    this.weatherService.requestWeatherData(location);
  }

  public handleReset() {
    this.weatherService.resetWeatherData();
  }
}
