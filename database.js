import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connection.on('connected', () => {
  console.log(`Conectado a base de datos`);
});

mongoose.connection.on('error', () => {
  console.log('Error en la conexión a base de datos');
});

mongoose.connect(process.env.MONGO_URI);
