import { Router } from "express";

import { MyJobController } from "../../controllers";

const myJobRouter: Router = Router();

myJobRouter.route(`/`)
.get(MyJobController.getAppliedJobs)
.post(MyJobController.applyJob)

myJobRouter.route(`/:myjob_id`)
.delete(MyJobController.withdrawApplication)

export default myJobRouter;