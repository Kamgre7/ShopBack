import { Router } from 'express';
import { ProductRecord } from '../records/product.record';
import { ProductEntityForm } from '../types';
import { upload } from '../utils/storage';
import { ValidationError } from '../utils/errors';

export const productRouter = Router();

productRouter
  .get('/', async (req, res) => {
    const allProducts = await ProductRecord.getAll();

    res.json(allProducts);
  })

  .get('/:id', async (req, res) => {
    const { id } = req.params;

    const product = await ProductRecord.getOne(id);

    if (product === null) {
      throw new ValidationError('Cannot find category');
    }

    res.json(product);
  })

  .post('/form', upload.single('img'), async (req, res) => {
    const {
      name, description, quantity, price, sku, categoryId,
    }: ProductEntityForm = req.body;

    const newProduct = new ProductRecord({
      name,
      description,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
      sku,
      categoryId,
      img: req.file.originalname,
    });

    const allProducts = await ProductRecord.getAll();
    const findDuplicate = allProducts.filter((product) => product.name === name);

    if (findDuplicate.length > 0) {
      throw new ValidationError('This product name is already taken. Try other one.');
    }

    const result = await newProduct.insert();

    res.json(result);
  });
