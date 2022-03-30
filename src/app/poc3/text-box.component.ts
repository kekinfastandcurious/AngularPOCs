import { Component, Input } from '@angular/core';
import { DraggableComponent } from './draggable.component';

@Component({
  template: `<div class="row">
    <div class="col-md-3">
      <div class="form-group">
        <label for="{{ data.fieldName }}">{{ data.fieldLabel }}</label>
        <input
          type="text"
          class="form-control"
          name="{{ data.fieldName }}"
          id="{{ data.fieldName }}"
        />
      </div>
    </div>
  </div>`,
})
export class TextBoxComponent implements DraggableComponent {
  @Input()
  data: any;
}
