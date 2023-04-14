const express = require("express");
const router = express.Router();
const { createJob, getAllJobs, getAllMyJobs } = require("../controllers/jobController");

router.route("/").post(createJob);
router.route("/").get(getAllJobs);
router.route("/myJobs").get(getAllMyJobs);
module.exports = router;
