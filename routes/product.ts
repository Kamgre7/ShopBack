import { Router } from 'express';
import { ProductRecord } from '../records/product.record';
import { ProductEntityForm } from '../types';
import { upload } from '../utils/storage';
import { filePathToFileName } from '../utils/filePathToFileName';

export const productRouter = Router();

productRouter
  .get('/', async (req, res) => {
    console.log(await ProductRecord.getAll());
  })

  .post('/form', upload.single('img'), (req, res) => {
    const {
      name, description, quantity, price, sku, categoryId, imgFileName,
    }: ProductEntityForm = req.body;

    const newProduct = new ProductRecord({
      name,
      description,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
      sku,
      categoryId,
      img: filePathToFileName(imgFileName),
    });

    console.log(newProduct.insert());
    res.send('img uploaded');
  });
