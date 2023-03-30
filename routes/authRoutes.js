const express = require("express");
const router = express.Router();
const { createUser, getAllUsers } = require("../controllers/authController");

router.route("/register").post(createUser);
router.route("/getUsers").get(getAllUsers);

module.exports = router;
