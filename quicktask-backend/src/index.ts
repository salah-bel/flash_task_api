import express from 'express';
import cors from 'cors';
import testRoutes from './routes/test.routes';
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
app.use( testRoutes);
// Routes

export default app;
