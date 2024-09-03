import { Router } from 'express';
import * as actorController from '../controllers/actorController.js';

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

actorRouter.get('/', actorController.getList);
actorRouter.get('/:id', actorController.getById);
actorRouter.post('/', actorController.create);
actorRouter.put('/:id', actorController.update);
actorRouter.delete('/:id', actorController.remove);

export default actorRouter;
