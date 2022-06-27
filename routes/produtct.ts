import { Router } from 'express';
import multer, { diskStorage } from 'multer';

export const productsRouter = Router();

const fileProperty = {
  filename: '',
};

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    console.log(file);
    fileProperty.filename = file.originalname;
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

productsRouter
  .get('/', (req, res) => {

  })
  .post('/form', upload.single('photo'), (req, res) => {
    const {
      name, description, quantity, price, sku, category,
    } = req.body;
    console.log({
      name, description, quantity, price, sku, category,
    }, fileProperty.filename);
    res.send('img uploaded');
  });
