import joi from 'joi';

//Validamos que req.body sea un objeto
export default joi.object({
  //name debe ser un string con longitud entre 4 y 20  obligatorio
  name: joi.string().pattern(new RegExp('^[a-zA-Z]{4,20}$')).required(),
  //gender de ser un string obligatorio y sus valores deben ser ['male', 'female', 'other']
  gender: joi.string().valid('male', 'female', 'other').required(),
});
