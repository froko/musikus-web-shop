import { Component, EventEmitter, Input, Output } from '@angular/core';

import { InstrumentListItem } from '../../instrumente.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor() {}
  @Input() instrumente: InstrumentListItem[];

  @Output() instrumentSelected = new EventEmitter<string>();

  navigate;

  hasInstruments() {
    return this.instrumente && this.instrumente.length > 0;
  }

  selected(value: string) {
    this.instrumentSelected.emit(value);
  }
}
