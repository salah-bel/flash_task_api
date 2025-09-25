import express from 'express';
import cors from 'cors';
import router from './routes/index';
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/v1',router);
// Routes

export default app;
