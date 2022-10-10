import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
})
export class DataItemComponent {
  @Input()
  public datapoint: any;
}
