const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookiesToResponse } = require("../utils");
const User = require("../models/User");

const register = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide email and password");
  }

  if (password !== confirmPassword) {
    throw new CustomError.BadRequestError("passwords did not match");
  }

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
  }

  const user = await User.create(req.body);
  const tokenUser = {
    name: user.name,
    id: user._id,
    role: user.role,
  };
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

module.exports = {
  register,
};
