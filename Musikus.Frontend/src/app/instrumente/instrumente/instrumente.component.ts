import { Component, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { FilterByHersteller, FilterByInstrumentTyp, GetAllInstruments } from '../instrumente.actions';
import { InstrumentFilter, InstrumentListItem } from '../instrumente.model';
import { InstrumenteState } from '../instrumente.state';

@Component({
  selector: 'app-instrumente',
  templateUrl: './instrumente.component.html',
  styleUrls: ['./instrumente.component.css']
})
export class InstrumenteComponent implements OnInit {
  @Select(InstrumenteState.instrumente)
  instrumente$: Observable<InstrumentListItem[]>;

  @Select(InstrumenteState.filter)
  filter$: Observable<InstrumentFilter>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetAllInstruments());
  }

  typeSelected(value: string) {
    this.store.dispatch(new FilterByInstrumentTyp(value));
  }

  herstellerSelected(value: string) {
    this.store.dispatch(new FilterByHersteller(value));
  }
}
