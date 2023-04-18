const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authController");

router.route("/register/hr").post(register("hr"));
router.route("/register/candidate").post(register("candidate"));
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;
