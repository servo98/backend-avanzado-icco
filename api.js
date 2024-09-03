import express from 'express';
import mongoose from 'mongoose';

mongoose.connection.on('connected', () => {
  console.log(`Conectado a base de datos`);
});

mongoose.connection.on('error', () => {
  console.log('Error en la conexión a base de datos');
});

mongoose.connect(
  'mongodb+srv://fernandonando98:UOaeAlQ4Wr1cEcOW@cluster0.rnnsy.mongodb.net/'
);

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
