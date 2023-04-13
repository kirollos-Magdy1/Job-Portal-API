const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Company = require("../models/Company");

const createCompany = (req, res) => {
  const company = Company.create(req.body);

  res.status(StatusCodes.CREATED).json({ company });
};

const getCompany = (req, res) => {
  const company = Company.findOne(req.params.id);
  if (companies.length === 0) {
    throw new CustomError.NotFoundError("No companies found");
  }

  res.status(StatusCodes.OK).json({ company });
};

module.exports = { createCompany, getCompany };