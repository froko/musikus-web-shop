import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InstrumentFilter } from '../../instrumente.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() filter: InstrumentFilter;

  @Output() typSelected = new EventEmitter<string>();

  @Output() herstellerSelected = new EventEmitter<string>();

  constructor() {}

  instrumentTypChanged(value: string) {
    this.typSelected.emit(value);
  }

  herstellerChanged(value: string) {
    this.herstellerSelected.emit(value);
  }
}
