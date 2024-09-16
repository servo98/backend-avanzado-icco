import jwt from 'jwt-simple';
import User from '../models/User.js';

export default async (req, res, next) => {
  //Extraer token de las cabecera Authorization
  const token = req.headers['authorization'];

  //Validar que el token no sea vacío
  if (!token) {
    return res.status(401).json({
      msg: 'No se encontró el token',
    });
  }

  //Validar que el token sea uno creado por el servidor (firmado por mi)
  try {
    const { userId } = jwt.decode(token, process.env.TOKEN_KEY);

    /**
     * Extraer al usuario que viene dentro del token
     */

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        msg: 'Usuario no encontrado',
      });
    }

    req.user = user;

    //llamar al controlador con next() solo si pasan todas las validaciones del token
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      msg: 'Token inválido',
    });
  }
};
