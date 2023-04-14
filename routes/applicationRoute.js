const express = require("express");
const router = express.Router();
const {
  applyForJob,
  getAllApps,
} = require("../controllers/applicationController");

router.route("/").post(applyForJob).get(getAllApps);

module.exports = router;
