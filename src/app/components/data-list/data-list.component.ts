import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
})
export class DataListComponent {
  @Input()
  public datapoints: any[] = [];

  @Output()
  public onReset = new EventEmitter<void>();

  public handleReset() {
    this.onReset.emit();
  }
}
