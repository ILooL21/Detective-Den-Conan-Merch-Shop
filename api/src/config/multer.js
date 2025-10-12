import fs from "fs";
import path from "path";
import multer from "multer";
import { getCurrentTime, generateUniqueCode } from "../utils/helper.js";

const BASE_UPLOAD_DIR = path.resolve(process.cwd(), "public", "images");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const validFolderTypes = ["avatars", "products", "articles", "riddles"];
    if (!req.body.folderType || !validFolderTypes.includes(req.body.folderType)) {
      return cb(new Error("Tipe folder tidak valid! Harus salah satu dari: avatars, products, articles, riddles."), false);
    }

    // Membuat direktori berdasarkan jenis folder yang dikirim di body request harus include (avatars, products, articles, riddles)
    const folderType = req.body.folderType;
    const uploadPath = path.join(BASE_UPLOAD_DIR, folderType);

    // Membuat folder jika belum ada
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Memberi nama file yang unik dengan timestamp untuk menghindari nama yang sama.
    // timestamp - folderType - uniquecode - originalname
    const uniqueName = `${getCurrentTime()}-${req.body.folderType}-${generateUniqueCode()}-${file.originalname.replace(/\s+/g, "_")}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Terima file
  } else {
    // Tolak file dan berikan pesan error
    cb(new Error("Tipe file tidak didukung! Hanya .png, .jpg, dan .jpeg yang diizinkan."), false);
  }
};

const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB
});

export default upload;
