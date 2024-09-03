import { Schema, model } from 'mongoose';

const actorSchema = new Schema({
  name: String,
  gender: String,
});

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

export default model('Actor', actorSchema);
