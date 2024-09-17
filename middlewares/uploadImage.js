import multer from 'multer';
import { storage } from '../utils/cloudinary.js';

export default multer({ storage });
