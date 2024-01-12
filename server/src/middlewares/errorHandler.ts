import { NextFunction, Request, Response } from "express";
import { MulterError } from "multer";

type CustomError = {
    storageErrors: any[],
    code: string;
    field: string;
} & Error

export default function errorHandler(err: CustomError, req: Request, res: Response, next: NextFunction) {
    let statusCode: number;
    let message: string;

    switch (err.name) {

        case `MulterError`:
            statusCode = 400;
            message = err.code
            break;

        case `InvalidFileExt`:
            statusCode = 400;
            message = err.message;
            break;
    
        default:
            if(err?.storageErrors) {
                statusCode = 400;
                message = `Image field cannot be empty`
            } else {
                statusCode = 500;
                message = `Internal Server Error`;
            }
            break;
    }
    
    res.status(statusCode).json({ message });
}