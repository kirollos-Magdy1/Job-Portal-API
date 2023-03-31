const express = require("express");
const router = express.Router();
const { createJob, getAllJobs } = require("../controllers/jobController");

router.route("/").post(createJob);
router.route("/").get(getAllJobs);

module.exports = router;
