import { Component, Input } from '@angular/core';
import { DraggableComponent } from './draggable.component';

@Component({
  template: `<div class="form-group">
    <button class="{{ data.btnClass }}">{{ data.btnLabel }}</button>
  </div>`,
})
export class ButtonComponent implements DraggableComponent {
  @Input()
  data: any;
}
