import { Request, Response, NextFunction } from "express";

class MyJobController {

    async getAppliedJobs(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async applyJob(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async withdrawApplication (req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }
}

export default new MyJobController()