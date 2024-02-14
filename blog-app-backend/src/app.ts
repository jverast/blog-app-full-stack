import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './config/mognoose.config';

import { router } from './routes';
import { logger } from './middlewares/log.middleware';
import { unknownEnpoint } from './middlewares/unknown.middleware';

const app = express();

db()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.log('Error connecting to MongoDB', e);
  });

app.use(cors());
app.use(express.json());
app.use(logger);

app.use(router);

app.use(unknownEnpoint);

export default app;
