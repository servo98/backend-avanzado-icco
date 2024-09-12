import Joi from 'joi';

export default Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().pattern(new RegExp('^[a-zA-Z]{4,20}$')).required(),
  password: Joi.string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .required(),
});
