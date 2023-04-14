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
module.exports = { applyForJob, getAllApps };
