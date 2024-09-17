import { v2 } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: v2,
  params: {
    folder: 'avatars',
    format: async (req, file) => 'jpg',
  },
});

export { storage };
