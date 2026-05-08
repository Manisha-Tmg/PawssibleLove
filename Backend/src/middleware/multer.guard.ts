import multer from "multer";
import path from "path";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: any) {
    const allowedFileTypes = [
      "image/jpg",
      "image/png",
      "image/jpeg",
      "image/webp",
    ];
    if (!allowedFileTypes.includes(file.mimetype)) {
      cb(new Error("This filetype is not accepted"));
      return;
    }
    cb(null, path.join(process.cwd(), "uploads"));
  },

  filename: function (req: Request, file: Express.Multer.File, cb: any) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

export { multer, storage };
