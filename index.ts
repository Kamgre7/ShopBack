import cors from 'cors';
import express, {json} from 'express';
import rateLimit from 'express-rate-limit';
import {config} from './config/config';

const app = express();

app.use(cors({
  origin: config.corsOrigin,
}));
app.use(json());
app.use(rateLimit({
  windowMs: 5 * 60 * 1000, // 5minutes
  max: 100, // Limit each IP to 100 requests per 'window' (here, per 5 minutes)
}));

app.listen(3001, '127.0.0.1', () => {
  console.log('Listening on port http://localhost:3001');
});
