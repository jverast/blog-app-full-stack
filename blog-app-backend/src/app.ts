import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import database from './config/database.config';

import { router } from './routes';
import { httpRequestLogger } from './middlewares/logger.middleware';
import { unknownEnpoint } from './middlewares/unknown.middleware';

const app = express();

database.connection();

app.use(cors());
app.use(express.json());
app.use(httpRequestLogger);

app.use(router);

app.use(unknownEnpoint);

export default app;
