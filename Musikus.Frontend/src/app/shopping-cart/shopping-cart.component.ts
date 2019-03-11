import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { RemoveFromShoppingCart } from './shopping-cart.actions';
import { Product } from './shopping-cart.model';
import { ShoppingCartState } from './shopping-cart.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Select(ShoppingCartState.Produkte)
  produkte$: Observable<Product[]>;

  @Select(ShoppingCartState.Warenwert)
  warenwert$: Observable<number>;

  displayedColumns: string[] = ['name', 'preis', 'artikelNr'];
  constructor(private store: Store) {}

  ngOnInit() {}

  removeProduct(artikelNr: string) {
    this.store.dispatch(new RemoveFromShoppingCart(artikelNr));
  }
}
