const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookiesToResponse } = require("../utils");
let users = [];

const createUser = (req, res) => {
  const { name, email, password, role, company } = req.body;

  const user = { name, email, password, role, company };
  console.log(user);
  users.push(user);
  const tokenUser = {
    name: user.name,
    id: user._id,
    role: user.role,
  };

  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const getAllUsers = (req, res) => {
  res.status(StatusCodes.CREATED).json({ users });
};

module.exports = {
  createUser,
  getAllUsers,
};
