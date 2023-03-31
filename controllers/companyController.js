const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

let companies = [
  {
    id: "1112",
    companyWebsite: "https://",
    companyLocation: "cairo",
    numberOfEmployees: 100,
  },
];

const createCompany = (req, res) => {
  const company = req.body;
  companies.push(company);

  res.status(StatusCodes.CREATED).json({ company });
};

const getCompany = (req, res) => {
  const company = companies.find((c) => c.id === req.params.id);

  res.status(StatusCodes.OK).json({ company });
};

module.exports = { createCompany, getCompany };