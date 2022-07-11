import { Router } from 'express';
import {
  CartEntity, CartEntityProperty, CartResponse, ProductEntity,
} from '../types';
import { productDetails } from '../utils/cart.validation.entity';
import { ProductRecord } from '../records/product.record';
import { CartRecord } from '../records/cart.record';

export const cartRouter = Router();

cartRouter
  .get('/', (req, res) => {

  })

  .post('/', async (req, res) => {
    const cart = req.body.cart as CartEntityProperty[];

    const productsIdList = (await ProductRecord.getAll())
      .map((product) => product.id);

    const availableProducts = cart.filter(({ productId }) => productsIdList.includes(productId));
    const basketItems:CartEntity[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for await (const product of availableProducts) {
      const {
        name, price, quantity, id, img,
      } = await productDetails(product.productId) as ProductEntity;

      basketItems.push({
        id, name, price, quantity, img, userQuantity: product.userQuantity,
      });
    }

    const basket = new CartRecord(basketItems);

    res.json({
      basketItems,
      totalCost: basket.totalCost(),
      totalItems: basket.totalItemsLength(),
    } as CartResponse);
  })

  .delete('/', (req, res) => {

  });
