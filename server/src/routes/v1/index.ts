import { Router } from "express";

import authRouter from "./auth.router";
import applicantRouter from "./applicant.router";
import jobRouter from "./job.router";
import myJobRouter from "./myJob.router";

const router: Router = Router();

router.use(`/auth`, authRouter);
router.use(`/applicants`, applicantRouter);
router.use(`/jobs`, jobRouter);
router.use(`/my-jobs`, myJobRouter);

export default router;