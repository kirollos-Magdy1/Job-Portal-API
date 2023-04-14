const express = require("express");
const router = express.Router();
const { register, getAllUsers } = require("../controllers/authController");

router.route("/register").post(register);

module.exports = router;
