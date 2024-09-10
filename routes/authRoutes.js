/**
 * register
 *
 * login
 */

import { Router } from 'express';
import * as authController from '../controllers/authController.js';

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

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

export default authRouter;
