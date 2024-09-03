import express from 'express';
import './database.js';

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
