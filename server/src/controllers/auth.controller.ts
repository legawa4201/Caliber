import { Request, Response, NextFunction } from "express";

class AuthController {

    async login(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }
}

export default new AuthController()