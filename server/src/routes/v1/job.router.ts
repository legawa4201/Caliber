import { Router } from "express";

import { JobController } from "../../controllers";

const jobRouter: Router = Router();

jobRouter.route(`/`)
.get(JobController.getJobs)

jobRouter.route(`/:job_id`)
.get(JobController.getJobDetail)

export default jobRouter;