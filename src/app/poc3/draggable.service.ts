import { Injectable } from '@angular/core';
import { ButtonComponent } from './button.component';
import { DraggableItem } from './draggable-item';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { TextBoxComponent } from './text-box.component';

@Injectable()
export class DraggableService {
  constructor() {}

  getDraggableComponents(): DraggableItem[] {
    return [
      new DraggableItem(
        TextBoxComponent,
        { fieldName: 'name', fieldLabel: 'Name' },
        'TextBox'
      ),
      new DraggableItem(
        HeaderComponent,
        { name: 'Kekin', bio: 'Technical Lead-2' },
        'Header'
      ),
      new DraggableItem(FooterComponent, {}, 'Footer'),
      new DraggableItem(
        ButtonComponent,
        { btnClass: 'btn btn-primary', btnLabel: 'Add' },
        'Primary Button'
      ),
      new DraggableItem(
        ButtonComponent,
        { btnClass: 'btn btn-success', btnLabel: 'Submit' },
        'Success Button'
      ),
    ];
  }
}
