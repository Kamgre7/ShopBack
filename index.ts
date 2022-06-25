import cors from 'cors';
import express, { json } from 'express';
import rateLimit from 'express-rate-limit';
import multer, { diskStorage } from 'multer';
import { config } from './config/config';
import { homeRouter } from './routes/home';

const app = express();

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

app.use(cors({
  origin: config.corsOrigin,
}));
app.use(json());
app.use(rateLimit({
  windowMs: 5 * 60 * 1000, // 5minutes
  max: 100, // Limit each IP to 100 requests per 'window' (here, per 5 minutes)
}));

app.post('/', upload.single('photo'), (req, res) => {
  const {
    name, description, quantity, price, sku, category,
  } = req.body;
  console.log({
    name, description, quantity, price, sku, category,
  }, fileProperty.filename);
  res.send('img uploaded');
});

app.use('/', homeRouter);

app.listen(3001, '127.0.0.1', () => {
  console.log('Listening on port http://localhost:3001');
});
