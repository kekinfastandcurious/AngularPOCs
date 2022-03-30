import { Type } from '@angular/core';
import { DraggableComponent } from './draggable.component';

export class DraggableItem {
  constructor(
    public component: Type<DraggableComponent>,
    public data: any,
    public tag: string
  ) {}
}
