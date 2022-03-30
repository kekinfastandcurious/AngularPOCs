import { Input, Component } from '@angular/core';
import { DraggableComponent } from './draggable.component';

@Component({
  template: `<table class="table table-bordered">
    <thead>
      <tr *ngFor="let column of data.columns">
        <th>Name</th>
        <th>Department</th>
        <th>SSN</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Kekin</td>
        <td>IT</td>
        <td>123-456-789</td>
      </tr>
    </tbody>
  </table>`,
})
export class TableComponent implements DraggableComponent {
  @Input()
  data: any;
}
