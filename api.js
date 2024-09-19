import express from 'express';
import actorRouter from './routes/actorRoutes.js';
import filmRouter from './routes/filmRoutes.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const api = express();

api.use(express.json());

api.use('/actors', actorRouter);
api.use('/films', filmRouter);
api.use('/auth', authRouter);
api.use('/users', userRouter);

api.get('/test', (req, res) => {
  return res.json({
    msg: 'API ruta /test ejecutada',
  });
});

api.get('/', (req, res) => {
  return res.json({
    msg: 'API Funcionando',
  });
});

export default api;
