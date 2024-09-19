import { connectDB } from './database.js';
import api from './api.js';

await connectDB();

const PORT = 8000;

api.listen(PORT, () => {
  console.log(process.env.NODE_ENV);
  console.log(`API Corriendo en el puerto ${PORT}`);
});
