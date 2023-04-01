const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

let applications = [
  {
    id: "12345",
    jobId: "6789",
    candidateId: "1011234",
    date: Date.now(),
  },
];

const getallApps = (req, res) => {
  res.status(StatusCodes.OK).json({ applications });
};

module.exports = { getallApps };
