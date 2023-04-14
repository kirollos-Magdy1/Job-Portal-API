const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const createJob = async (req, res) => {
  req.body.hr = req.user.id;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find();
  if (!jobs.length) {
    throw new CustomError.NotFoundError("No jobs found");
  }
  res.status(StatusCodes.OK).json({ jobs });
};


module.exports = {
  createJob,
  getAllJobs,
};