const { authenticate } = require("../middleware/authentication");
const { authorize } = require("../middleware/authorization");
const express = require("express");
const router = express.Router();
const {
  createJob,
  getAllJobs,
  getSingleJob,
  editJob,
  deleteJob,
} = require("../controllers/jobController");

router
  .route("/")
  .post(authenticate, authorize("hr"), createJob)
  .get(getAllJobs);

  router
  .route("/:id")
  .get(getSingleJob)
  .patch(authenticate, authorize("hr"), editJob)
  .delete(authenticate, authorize("hr"), deleteJob);
module.exports = router;
