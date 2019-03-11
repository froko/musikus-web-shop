import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Navigate } from '@ngxs/router-plugin';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AddToShoppingCart } from '@musikus/shopping-cart';

import { GetInstrument } from '../instrumente.actions';
import { InstrumentWithDescription } from '../instrumente.model';
import { InstrumenteState } from '../instrumente.state';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit, OnDestroy {
  @Select(InstrumenteState.instrument)
  instrument$: Observable<InstrumentWithDescription>;

  private subscription: Subscription;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.paramMap
      .pipe(
        tap((params: ParamMap) => {
          this.store.dispatch(new GetInstrument(params.get('id')));
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goBackToOverview() {
    this.store.dispatch(new Navigate(['/instrumente']));
  }

  addToShoppingCart(artikelNr: string, name: string, preis: number) {
    this.store.dispatch(new AddToShoppingCart(artikelNr, name, preis));
  }
}
