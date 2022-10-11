import { Component, Input } from '@angular/core';
import { WeatherData } from '../../types/weather-data.interface';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
})
export class DataItemComponent {
  @Input()
  public datapoint!: WeatherData;
}
