const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Company = require("../models/Company");

const createCompany = async (req, res) => {
  req.body.hr = req.user.id;
  const company = await Company.create(req.body);

  res.status(StatusCodes.CREATED).json({ company });
};

const getCompany = async (req, res) => {
  const company = await Company.findOne({ _id: req.params.id });
  if (company.length === 0) {
    throw new CustomError.NotFoundError("No company found");
  }

  res.status(StatusCodes.OK).json({ company });
};

const getMyCompany = async (req, res) => {
  const company = await Company.findOne({ hr: req.user.id });
  if (company.length === 0) {
    throw new CustomError.NotFoundError("No company found");
  }
  res.status(StatusCodes.OK).json({ company });
};

const editCompany = async (req, res) => {
  const company = await Company.findByIdAndUpdate(
    { _id: req.params.id, hr: req.user.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!company) {
    throw new CustomError.NotFoundError("No company found");
  }
  res.status(StatusCodes.OK).json({ company });
};

module.exports = { createCompany, getCompany, getMyCompany, editCompany };