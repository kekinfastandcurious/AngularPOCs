import { Component, Input } from '@angular/core';
import { DraggableComponent } from './draggable.component';

@Component({
  template: `<div class="row">
    <div class="col-md-12">
      <h3>This is Header Component {{ data.name }}</h3>
      <h4>{{ data.bio }}</h4>
    </div>
  </div>`,
})
export class HeaderComponent implements DraggableComponent {
  @Input()
  data: any;
}
