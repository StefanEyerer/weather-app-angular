import { Component } from '@angular/core';
import { of } from 'rxjs';
import { data } from '../../mock-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  public weatherData$ = of(data);
}
