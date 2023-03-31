const express = require("express");
const router = express.Router();
const {
  createCompany,
  getCompany,
} = require("../controllers/companyController");

router.route("/").post(createCompany);
router.route("/:id").get(getCompany);

module.exports = router;