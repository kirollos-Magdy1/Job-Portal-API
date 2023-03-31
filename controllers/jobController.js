const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
let jobs = [];
const createJob = (req, res) => {
    const job = req.body;
    jobs.push(job);
    res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = (req, res) => {
  res.status(StatusCodes.OK).json({ jobs });
};
module.exports = {
    createJob,
    getAllJobs
};
