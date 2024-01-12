import { Request, Response, NextFunction } from "express";

class JobController {

    async getJobs(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async getJobDetail(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }
}

export default new JobController()