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

const getSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    throw new CustomError.NotFoundError(
      "No job found with id " + req.params.id
    );
  }

  res.status(StatusCodes.OK).json({ job });
};

const editJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(
    { _id: req.params.id, hr: req.user.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!job) {
    throw new CustomError.NotFoundError(
      "No job found with id " + req.params.id
    );
  }

  res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req, res) => {
  const job = await Job.findByIdAndDelete({
    _id: req.params.id,
    hr: req.user.id,
  });
  if (!job) {
    throw new CustomError.NotFoundError(
      "No job found with id " + req.params.id
    );
  }

  res.status(StatusCodes.OK).json({ msg: "job delted" });
};

module.exports = {
  createJob,
  getAllJobs,
  getSingleJob,
  editJob,
  deleteJob,
};
