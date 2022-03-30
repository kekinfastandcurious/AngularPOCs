import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { POC2Service } from './poc2.service';
import { Well, WellType } from './well';
import { WellComponent } from './well.component';

@Component({
  selector: 'app-wells',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css'],
})
export class WellListComponent implements OnInit, AfterViewInit {
  public wells: Well[] = [];

  @ViewChild(WellComponent)
  wellComponent: WellComponent;

  sourceKeyValue = '';

  ngOnInit(): void {
    this.pocService.getWellsList().subscribe((wells) => {
      console.log('Wells', wells);
      this.wells = wells;
    });
  }

  ngAfterViewInit(): void {}

  constructor(private pocService: POC2Service) {}

  backgroundChange(wellType: string) {
    if (wellType == WellType.ESP) {
      return { greenBg: false, pinkBg: true };
    } else {
      return { greenBg: true, pinkBg: false };
    }
  }

  addNewWell(newWell: string) {
    console.log('Add new Well..');
    const newWellDetails = this.wellComponent.wellForm.form.value;

    console.log('## Valid', this.wellComponent.wellForm.valid);
    if (this.wellComponent.wellForm.valid) {
      console.log('## Well Type', newWellDetails.wellType);
      this.wells.push({
        name: newWellDetails.wellName,
        type: newWellDetails.wellType,
        sourceKey: newWellDetails.sourceKey,
      });
    }
  }

  onSourceKeySelect(sourceKey: string) {
    console.log('SourceKey Selected:', sourceKey);
    this.sourceKeyValue = sourceKey;
  }
}
