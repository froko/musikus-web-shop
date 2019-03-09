import { Component, Input } from '@angular/core';

import { InstrumentListItem } from '../../instrumente.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() instrumente: InstrumentListItem[];

  constructor() {}

  hasInstruments() {
    return this.instrumente && this.instrumente.length > 0;
  }
}
