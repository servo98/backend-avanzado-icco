import jwt from 'jwt-simple';

export default (req, res, next) => {
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
    const payload = jwt.decode(token, process.env.TOKEN_KEY);
    console.log(payload);
    //llamar al controlador con next() solo si pasan todas las validaciones del token
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      msg: 'Token inválido',
    });
  }
};
