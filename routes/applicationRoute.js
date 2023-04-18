const express = require("express");
const router = express.Router();
const {
  applyForJob,
  getAllApps,
  getSingleJobApps,
  getApp,
  deleteApp,
  editAppStatus,
} = require("../controllers/applicationController");
const { authenticate } = require("../middleware/authentication");
const { authorize } = require("../middleware/authorization");

router
  .route("/")
  .post(authenticate, authorize("candidate"), applyForJob)
  .get(authenticate, authorize("candidate"), getAllApps);
router
  .route("/:id")
  .get(authenticate, authorize("candidate"), getApp)
  .delete(authenticate, authorize("candidate"), deleteApp)
  .patch(authenticate, authorize("hr"), editAppStatus);

router
  .route("/:id/applications")
  .get(authenticate, authorize("hr"), getSingleJobApps);


module.exports = router;
