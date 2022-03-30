import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dragDropContainer]',
})
export class DynamicLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
