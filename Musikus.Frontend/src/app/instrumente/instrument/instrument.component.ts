import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Instrument } from '../instrumente.model';
import { InstrumenteService } from '../instrumente.service';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {
  instrument$: Observable<Instrument>;
  beschreibung$: Observable<string>;

  constructor(private service: InstrumenteService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.instrument$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.get(params.get('id'))));
    this.beschreibung$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getDescription(params.get('id')))
    );
  }
}
