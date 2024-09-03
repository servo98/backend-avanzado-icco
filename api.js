import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connection.on('connected', () => {
  console.log(`Conectado a base de datos`);
});

mongoose.connection.on('error', () => {
  console.log('Error en la conexión a base de datos');
});

mongoose.connect(process.env.MONGO_URI);

const PORT = 8000;

const api = express();

api.get('/test', (req, res) => {
  return res.json({
    msg: 'API ruta /test ejecutada',
  });
});

api.listen(PORT, () => {
  console.log(`API Corriendo en el puerto ${PORT}`);
});
