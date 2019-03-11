import { Action, Selector, State, StateContext } from '@ngxs/store';

import { AddToShoppingCart, RemoveFromShoppingCart } from './shopping-cart.actions';
import { Product } from './shopping-cart.model';

export interface ShoppingCartStateModel {
  shoppingCart: Product[];
}

@State<ShoppingCartStateModel>({
  name: 'app',
  defaults: {
    shoppingCart: []
  }
})
export class ShoppingCartState {
  @Selector()
  public static Warenwert(state: ShoppingCartStateModel) {
    return state.shoppingCart.map(p => p.preis).reduce((sum, current) => sum + current);
  }

  @Selector()
  public static Produkte(state: ShoppingCartStateModel) {
    return state.shoppingCart;
  }

  @Action(AddToShoppingCart)
  addToShoppingCart(ctx: StateContext<ShoppingCartStateModel>, action: AddToShoppingCart) {
    const state = ctx.getState();

    return ctx.patchState({
      shoppingCart: state.shoppingCart.concat(new Product(action.artikelNr, action.name, action.preis))
    });
  }

  @Action(RemoveFromShoppingCart)
  removeFromShoppingCart(ctx: StateContext<ShoppingCartStateModel>, action: RemoveFromShoppingCart) {
    const state = ctx.getState();

    return ctx.patchState({
      shoppingCart: state.shoppingCart.filter(p => p.artikelNr !== action.artikelNr)
    });
  }
}
