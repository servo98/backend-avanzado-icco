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
  role: {
    type: String,
    require: true,
    default: 'USER',
    enum: ['ADMIN', 'USER'],
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

export default model('User', userSchema);
