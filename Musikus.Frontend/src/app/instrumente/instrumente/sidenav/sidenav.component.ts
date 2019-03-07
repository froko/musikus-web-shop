import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() typen: string[];

  @Input() hersteller: string[];

  @Output() typSelected = new EventEmitter<string>();

  @Output() herstellerSelected = new EventEmitter<string>();

  constructor() {}

  instrumentTypChanged(value: string) {
    if (value) {
      this.typSelected.emit(value);
    } else {
      this.typSelected.emit('');
    }
  }

  herstellerChanged(value: string) {
    if (value) {
      this.herstellerSelected.emit(value);
    } else {
      this.herstellerSelected.emit('');
    }
  }
}
