import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { InstrumentListItem } from '../instrumente.model';
import { InstrumenteService } from '../instrumente.service';

@Component({
  selector: 'app-instrumente',
  templateUrl: './instrumente.component.html',
  styleUrls: ['./instrumente.component.css']
})
export class InstrumenteComponent implements OnInit {
  instrumente$: Observable<InstrumentListItem[]>;
  typen$: Observable<string[]>;
  hersteller$: Observable<string[]>;

  constructor(private service: InstrumenteService) {}

  ngOnInit() {
    this.instrumente$ = this.service.getAll();
    this.typen$ = this.service.getTypen();
    this.hersteller$ = this.service.getHersteller();
  }

  selectionChanged(value: string) {
    console.log('Selection changed:', value);
  }
}
