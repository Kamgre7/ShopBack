import { Router } from 'express';
import multer, { diskStorage } from 'multer';
import { ProductRecord } from '../records/product.record';
import { ProductEntityForm } from '../types';

export const productsRouter = Router();

const fileProperty = {
  filename: '',
};

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    fileProperty.filename = file.originalname;
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

productsRouter
  .get('/', async (req, res) => {
    console.log(await ProductRecord.getAll());
  })
  .post('/form', upload.single('photo'), (req, res) => {
    const {
      name, description, quantity, price, sku, categoryId,
    }: ProductEntityForm = req.body;

    const newProduct = new ProductRecord({
      name,
      description,
      quantity: Number(quantity),
      price: Number(price),
      sku,
      categoryId,
      img: fileProperty.filename,
    });

    res.send('img uploaded');
  });
