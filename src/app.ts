import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './config/mognoose.config';

import { router } from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

db()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.log('Error connecting to MongoDB', e);
  });

app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
