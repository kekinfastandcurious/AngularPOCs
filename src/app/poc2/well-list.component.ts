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
    const newWellDetails = this.wellComponent.wellForm.form.value;

    if (this.wellComponent.wellForm.valid) {
      this.wells.push({
        name: newWellDetails.wellName,
        type: newWellDetails.wellType,
        sourceKey: newWellDetails.sourceKey,
      });
      this.wellComponent.wellForm.form.reset();
    }
  }

  onSourceKeySelect(sourceKey: string) {
    this.sourceKeyValue = sourceKey;
  }
}
