import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connection.on('connected', () => {
  console.log(`Conectado a base de datos`);
});

mongoose.connection.on('error', () => {
  console.log('Error en la conexión a base de datos');
});
export const connectDB = async () => {
  const URI =
    process.env.MONGO_URI +
    `${process.env.NODE_ENV == 'test' ? 'pruebas' : ''}`;

  console.log(`Conectado a la base con uri = ${URI}`);
  await mongoose.connect(URI);
};

export const disconnectDB = async () => {
  await mongoose.disconnect();
};
