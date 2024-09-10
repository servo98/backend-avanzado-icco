/**
 * schema (molde)
 * nombre modelo
 */

import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model('User', userSchema);
