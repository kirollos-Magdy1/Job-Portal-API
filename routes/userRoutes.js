const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/authentication");
const { authorize } = require("../middleware/authorization");

const {
  showMe,
  updateInfo,
  updatePassword,
  deleteUser,
  updateProfile,
} = require("../controllers/userController");

router
  .route("/")
  .get(authenticate, showMe)
  .patch(authenticate, authorize("candidate"), updateProfile)
  .delete(authenticate, deleteUser);
router.route("/updatePassword").patch(authenticate, updatePassword);

module.exports = router;
