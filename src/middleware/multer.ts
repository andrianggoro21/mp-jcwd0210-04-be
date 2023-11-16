import path from 'path';
import multer from "multer";
import { Request, Response } from 'express';

// const productStorage = multer.diskStorage({
//     destination: (req: Request, res: Response, cb: any) => {
//       cb(null, path.join(__dirname, '../public/images/product'));
//     },
//     filename: (req: Request, file: Express.Multer.File, cb: any) => {
//       // const { username } = req.user;
//       // cb(null, `event_${username}-${Date.now()}-${file.originalname}`);
//       cb(null, `event_user-${Date.now()}-${file.originalname}`);
//     },
//   });

const productStorage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
      cb(null, path.join(__dirname, '../public/images/product'));
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
      // const { username } = req.user;
      // cb(null, `event_${username}-${Date.now()}-${file.originalname}`);
      cb(null, `product_user-${Date.now()}-${file.originalname}`);
    },
});

const update_profile = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/images/update_profile"));
  },
  filename: (req, file, cb) => {
    cb(null, `update_profile_${Date.now()}-${file.originalname}`);
  },
});

  const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
    const fileType = file.mimetype.split('/')[1];
    if (
      fileType === 'png' ||
      fileType === 'jpg' ||
      fileType === 'jpeg' ||
      fileType === 'gif'
    ) {
      cb(null, true);
    } else {
      cb('File type not allowed', false);
    }
  };

  const limits = {
    fileSize: 5120 * 5120,
  };

  const uploadProductFile = multer({
    storage: productStorage,
    fileFilter,
    limits,
  }).single('image');

  const UploadUpdate_ProfileFile = multer({
    storage: update_profile,
    fileFilter,
    limits,
  }).single("image");

  export = {
    uploadProductFile,
    UploadUpdate_ProfileFile,
  }