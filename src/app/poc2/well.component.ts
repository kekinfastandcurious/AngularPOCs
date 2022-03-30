import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  Input,
} from '@angular/core';
import { NgForm } from '@angular/forms';
// import { EventEmitter } from "stream";
import { WellType } from './well';

@Component({
  selector: 'app-well',
  templateUrl: 'well.component.html',
  styleUrls: ['well.component.css'],
})
export class WellComponent implements OnInit {
  ngOnInit(): void {}

  @ViewChild('wellForm')
  wellForm: NgForm;

  @Output()
  onNewWellAdded = new EventEmitter<string>();

  @Input()
  sourceKey = '';

  constructor() {}

  public wellTypes = [
    { value: '', tag: 'Select' },
    { value: WellType.ESP, tag: WellType.ESP },
    { value: WellType.RLS, tag: WellType.RLS },
  ];

  public onSubmit() {
    this.onNewWellAdded.emit('Kekin');
  }
}
