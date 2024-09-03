import { Schema, model } from 'mongoose';

const filmSchema = new Schema({
  title: String,
  genre: String,
  description: String,
});

export default model('Film', filmSchema);
