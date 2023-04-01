const express = require("express");
const router = express.Router();
const { getallApps } = require("../controllers/applicationController");

router.route("/").get(getallApps);

module.exports = router;
