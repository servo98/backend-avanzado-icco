export default (schema) => (req, res, next) => {
  //Extraemos los valores de value y error al ejecutar schema.validate
  /**
   * {
   *  value -> schema validado
   *  error -> errores al validar
   * }
   */
  const { value, error } = schema.validate(req.body);

  //Si la validación no tuvo errores
  if (!error) {
    //Pasamos el req a el controlador
    next();
  } else {
    //Regresamos un error al cliente
    return res.status(400).json({
      msg: 'Body no cumple con el formato',
      errors: error,
    });
  }
};
