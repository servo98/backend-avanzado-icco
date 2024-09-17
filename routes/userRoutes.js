import { Router } from 'express';
import { changeAvatar } from '../controllers/userController.js';
import authenticated from '../middlewares/authenticated.js';
import uploadImage from '../middlewares/uploadImage.js';

const userRouter = Router();

userRouter.patch(
  '/avatar',
  authenticated,
  uploadImage.single('avatar'),
  changeAvatar
);

export default userRouter;
