const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
let jobs = [];
const createJob = (req, res) => {
    const job = req.body;
    jobs.push(job);
    res.status(StatusCodes.CREATED).json({ job });
};

module.exports = {
    createJob,
};
