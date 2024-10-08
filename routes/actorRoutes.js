import { Router } from 'express';
import * as actorController from '../controllers/actorController.js';
import authenticated from '../middlewares/authenticated.js';
import validateBody from '../middlewares/validateBody.js';
import createActorSchema from '../schemas/createActorSchema.js';
import validateRole from '../middlewares/validateRole.js';

const actorRouter = Router();

/**
 * C
 * R
 * U
 * D
 */

/**
 * GET /actors - Lista de actores
 * GET /actors/:id Actor por id
 * POST /actors Crear actor
 * PUT /actors/:id Actualizar actor por id
 * DELETE /actors/:id Borrar actor por id
 */

actorRouter.use(authenticated);

actorRouter.get('/', actorController.getList);
actorRouter.get('/:actorId', actorController.getById);
//Validamos el req.body con el schema
actorRouter.post('/', validateBody(createActorSchema), actorController.create);
actorRouter.put('/:actorId', actorController.update);
actorRouter.delete(
  '/:actorId',
  validateRole(['ADMIN']),
  actorController.remove
);

export default actorRouter;
