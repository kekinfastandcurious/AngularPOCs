import { Component, Input } from '@angular/core';
import { DraggableComponent } from './draggable.component';

@Component({
  template: `<div class="row">
    <div class="col-md-12">
      <h3>This is footer component</h3>
    </div>
  </div>`,
})
export class FooterComponent implements DraggableComponent {
  @Input()
  data: any;
}
