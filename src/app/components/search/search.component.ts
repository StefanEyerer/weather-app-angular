import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  public location = new FormControl('');

  @Output()
  public onSubmit = new EventEmitter<string>();

  public handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (!this.location.value) return;

    this.onSubmit.emit(this.location.value);
    this.location.reset();
  }
}
