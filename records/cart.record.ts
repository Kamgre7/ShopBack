import { CartEntity } from '../types';

export class CartRecord {
  private cartItems:CartEntity[] = [];

  private totalPrice = 0;

  private totalItems = 0;

  constructor(itemsObj: CartEntity[]) {
    this.cartItems = itemsObj;
  }

  totalCost():number {
    this.totalPrice = this.cartItems.reduce((prev, curr) => prev + (curr.price * curr.userQuantity), 0);
    return this.totalPrice;
  }

  totalItemsLength():number {
    this.totalItems = this.cartItems.reduce((prev, curr) => prev + curr.userQuantity, 0);
    return this.totalItems;
  }
}
