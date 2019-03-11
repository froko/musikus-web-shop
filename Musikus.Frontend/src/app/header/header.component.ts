import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ShoppingCartState } from '@musikus/shopping-cart';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Select(ShoppingCartState.Warenwert)
  warenwert$: Observable<number>;

  constructor(private store: Store) {}

  navigateToOverview() {
    this.store.dispatch(new Navigate(['/instrumente']));
  }

  navigateToShoppingCart() {
    this.store.dispatch(new Navigate(['/shopping-cart']));
  }
}
