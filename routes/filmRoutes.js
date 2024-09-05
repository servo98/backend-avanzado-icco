import { Router } from 'express';
import * as filmController from '../controllers/filmController.js';

const filmRouter = Router();

filmRouter.post('/', filmController.create);
filmRouter.get('/', filmController.getFilms);
filmRouter.get('/:filmId', filmController.getById);
filmRouter.put('/:filmId', filmController.updateById);
filmRouter.delete('/:filmId', filmController.deleteById);

export default filmRouter;
