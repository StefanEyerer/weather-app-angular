import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherData } from '../../types/weather-data.interface';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
})
export class DataListComponent {
  @Input()
  public datapoints: WeatherData[] = [];

  @Output()
  public onReset = new EventEmitter<void>();

  public handleReset() {
    this.onReset.emit();
  }
}
