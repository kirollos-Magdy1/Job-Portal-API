const Application = require("../models/Application");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const applyForJob = async (req, res) => {
  req.body.candidate = req.user.id;

  const applicationExists = await Application.findOne({
    candidate: req.body.candidate,
    job: req.body.job,
  });
  if (applicationExists) {
    throw new CustomError.BadRequestError(
      `candidate already applied for this position`
    );
  }
  const application = await Application.create(req.body);
  res.status(StatusCodes.CREATED).json({ application });
};

const getAllApps = async (req, res) => {
  const applications = await Application.find({
    candidate: req.user.id,
  })
    .populate({
      path: "candidate",
      select: "-password",
    })
    .populate({ path: "job" });

  if (!applications) {
    throw new CustomError.NotFoundError(`No applications found`);
  }
  res.status(StatusCodes.OK).json({ applications });
};

const getApp = async (req, res) => {
  const appId = req.params.id;
  const application = await Application.findOne({
    _id: appId,
    candidate: req.user.id,
  }).populate({ path: "job" });

  if (!application) {
    throw new CustomError.NotFoundError(`No application with id ${appId}`);
  }
  res.status(StatusCodes.OK).json({ application });
};
const getSingleJobApps = async (req, res) => {
  const jobId = req.params.id;
  const applications = await Application.find({
    job: jobId,
  })
    .populate({
      path: "candidate",
      select: "-password",
    })
    .populate({ path: "job" });

  if (!applications) {
    throw new CustomError.NotFoundError(`No applications found for this job`);
  }
  res.status(StatusCodes.OK).json({ applications });

};
const editAppStatus = async (req, res) => {
  const appId = req.params.id;
  if (!req.body.status) {
    throw new CustomError.BadRequestError(
      `application status must be provided`
    );
  }
  const application = await Application.findByIdAndUpdate(
    { _id: appId },
    { status: req.body.status },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!application) {
    throw new CustomError.NotFoundError(`No application with id ${appId}`);
  }
  res.status(StatusCodes.OK).json({ application });
};

const deleteApp = async (req, res) => {
  const appId = req.params.id;
  const application = await Application.findByIdAndDelete({
    _id: appId,
    candidate: req.user.id,
  });

  if (!application) {
    throw new CustomError.NotFoundError(`No application with id ${appId}`);
  }
  res.status(StatusCodes.OK).json({ application });
};

module.exports = {
  applyForJob,
  getAllApps,
  getSingleJobApps,
  getApp,
  deleteApp,
  editAppStatus,
};

