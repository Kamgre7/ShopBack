import { Router } from 'express';
import { ProductRecord } from '../records/product.record';
import { ProductEntityForm } from '../types';
import { upload } from '../utils/storage';

export const productRouter = Router();

productRouter
  .get('/', async (req, res) => {
    console.log(await ProductRecord.getAll());
  })

  .post('/form', upload.single('photo'), (req, res) => {
    const {
      name, description, quantity, price, sku, categoryId, photoFileName,
    }: ProductEntityForm = req.body;

    const newProduct = new ProductRecord({
      name,
      description,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
      sku,
      categoryId,
      img: photoFileName[0].split('\\')[2].split('.')[0],
    });

    console.log(newProduct.insert());
    res.send('img uploaded');
  });
