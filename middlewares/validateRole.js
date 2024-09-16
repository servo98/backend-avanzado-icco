export default (roles) => (req, res, next) => {
  if (roles.includes(req.user.role)) {
    next();
  } else {
    return res.status(403).json({
      msg: 'El usuario no tiene permisos suficientes para hacer la solicitud',
    });
  }
};
