import { Request, Response, NextFunction } from "express";

class ApplicantController {

    async getProfile(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async register(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async unregister(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async updateProfilePic(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

export default new ApplicantController()