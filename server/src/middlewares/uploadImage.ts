import path from "path";
import { Request, Response, NextFunction } from "express";
import multer, { Multer, StorageEngine, MulterError } from "multer";

const storage: StorageEngine = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, `public`);
    },
    filename(req, file, callback) {
        callback(null, new Date().getTime() + path.extname(file.originalname));
    }
})


const MULTER: Multer = multer({
    storage,
    fileFilter: (req, file, callback) => {
        const fileExts = [`.png`, `.jpg`, `.jpeg`];

        const isAllowedExt = fileExts.includes(
            path.extname(file.originalname.toLowerCase())
        );

        const isAllowedMimeType = file.mimetype.startsWith("image/");
        if(isAllowedExt && isAllowedMimeType) return callback(null, true);
        return callback({ name: `InvalidFileExt`, message: `Only .png, .jpg, .jpeg extensions are allowed` });
    },
    limits: {
        fileSize: 1024 * 2 * 1000
    }
})

export const uploadSingleImg = MULTER.single(`image`)