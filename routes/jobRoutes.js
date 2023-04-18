const { authenticate } = require("../middleware/authentication");
const { authorize } = require("../middleware/authorization");
const express = require("express");
const router = express.Router();
const {
  createJob,
  getAllJobs,
  getSingleJob,
} = require("../controllers/jobController");

router
  .route("/")
  .post(authenticate, authorize("hr"), createJob)
  .get(getAllJobs);
router.route("/:id").get(getSingleJob);
module.exports = router;
