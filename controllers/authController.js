import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';

import User from '../models/User.js';

export const register = async (req, res) => {
  try {
    //Sobre escribir el body.password con un password encriptado
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(req.body);

    return res.json({
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al registrar usuario',
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res.status(404).json({
        msg: 'Usuario no encontrado',
      });
    }

    //Comaprando contraseña del body con la encriptada
    const isPasswordEquals = await bcrypt.compare(password, user.password);

    if (!isPasswordEquals) {
      return res.status(401).json({
        msg: 'Credenciales inválidas',
      });
    }
    //Generar y mandar token token
    const token = jwt.encode(
      {
        userId: user.id,
      },
      process.env.TOKEN_KEY
    );

    return res.json({
      msg: 'Contraseña y correo validado',
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al hacer login',
    });
  }
};
