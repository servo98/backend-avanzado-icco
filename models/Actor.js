import { Schema, model } from 'mongoose';

/**
 * Cosas necesarias para hacer un modelo en mongoose
 *
 *
 * schema
 *
 * name
 *
 */

/**Nota: los nombres de los modelos deben ser en singular y que inicien con Mayus */

const actorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

export default model('Actor', actorSchema);
