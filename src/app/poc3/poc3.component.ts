import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DraggableItem } from './draggable-item';
import { DraggableService } from './draggable.service';
import { DynamicLoaderDirective } from './dynamic-loader.directive';
import { DraggableComponent } from './draggable.component';

@Component({
  selector: 'app-poc3',
  templateUrl: './poc3.component.html',
  styleUrls: ['./poc3.component.css'],
  providers: [DraggableService],
})
export class POC3Component implements OnInit {
  draggableItems: DraggableItem[];

  draggableComponentNames: string[];
  dropZoneItems: string[] = [];

  @ViewChild(DynamicLoaderDirective, { static: true })
  containerTempl!: DynamicLoaderDirective;

  ngOnInit(): void {
    this.draggableItems = this.draggableService.getDraggableComponents();
    this.draggableComponentNames = this.draggableItems.map((d) => d.tag);
  }

  constructor(
    private draggableService: DraggableService,
    private cfr: ComponentFactoryResolver
  ) {}

  public renderComponent(item: DraggableItem) {
    const viewContainerRef = this.containerTempl.viewContainerRef;
    const componentFactory = this.cfr.resolveComponentFactory(item.component);
    const componentRef =
      viewContainerRef.createComponent<DraggableComponent>(componentFactory);
    componentRef.instance.data = item.data;
  }
}
