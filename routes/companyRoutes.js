const express = require("express");
const router = express.Router();
const { authorize } = require("../middleware/authorization");
const { authenticate } = require("../middleware/authentication");

const {
  createCompany,
  getCompany,
  getMyCompany,
  editCompany,
} = require("../controllers/companyController");

router
  .route("/")
  .post(authenticate, authorize("hr"), createCompany)
  .get(authenticate, authorize("hr"), getMyCompany);

router
  .route("/:id")
  .get(getCompany)
  .patch(authenticate, authorize("hr"), editCompany);

module.exports = router;