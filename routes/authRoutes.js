/**
 * register
 *
 * login
 */

import { Router } from 'express';
import * as authController from '../controllers/authController.js';
import validateBody from '../middlewares/validateBody.js';
import createUserSchema from '../schemas/createUserSchema.js';

const authRouter = Router();

/**
 * HTTP Methods (Verbs)
 *
 * GET
 * POST
 * PUT
 * DELETE
 * PATCH
 * OPTIONS
 */

authRouter.post(
  '/register',
  validateBody(createUserSchema),
  authController.register
);
authRouter.post('/login', authController.login);

export default authRouter;
