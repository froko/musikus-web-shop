export class AddToShoppingCart {
  static readonly type = '[Shopping Cart] Add Instrument To Shopping Cart';

  constructor(public artikelNr: string, public name: string, public preis: number) {}
}

export class RemoveFromShoppingCart {
  static readonly type = '[Shopping Cart] Remove Instrument From Shopping Cart';

  constructor(public artikelNr: string) {}
}
