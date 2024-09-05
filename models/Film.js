import { Schema, model } from 'mongoose';

const filmSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  actors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Actor',
    },
  ],
});

export default model('Film', filmSchema);
