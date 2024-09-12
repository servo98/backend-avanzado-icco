import express from 'express';
import './database.js';
import actorRouter from './routes/actorRoutes.js';
import filmRouter from './routes/filmRoutes.js';
import authRouter from './routes/authRoutes.js';

const PORT = 8000;

const api = express();

api.use(express.json());

api.use('/actors', actorRouter);
api.use('/films', filmRouter);
api.use('/auth', authRouter);

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

api.listen(PORT, () => {
  console.log(`API Corriendo en el puerto ${PORT}`);
});
