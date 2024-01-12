import { Router } from "express";

import { ApplicantController } from "../../controllers";

import { uploadSingleImg } from "../../middlewares/uploadImage";

const applicantRouter: Router = Router();

applicantRouter.route(`/`)
.post(ApplicantController.register)

applicantRouter.route(`/:applicant_id`)
.get(ApplicantController.getProfile)
.patch(uploadSingleImg, ApplicantController.updateProfilePic)
.delete(ApplicantController.unregister)


export default applicantRouter;