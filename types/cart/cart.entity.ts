export interface CartEntityProperty {
  productId: string;
  userQuantity: number;
}

export interface CartEntity {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
  userQuantity:number;
}

export interface CartResponse {
  basketItems: CartEntity[]
  totalCost: number;
  totalItems: number;
}
